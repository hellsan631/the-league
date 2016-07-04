import { 
  Component, 
  OnInit, 
  Input, 
  Output,  
  EventEmitter
} from '@angular/core';

import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { 
  isUserAuthenticatedSync, 
  MemberService, 
  Member 
} from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-navigation',
  template: `  
    <nav [class.open]="sideNavOpen" (window:resize)="onResize($event)">
      <ul [class.open]="sideNavOpen" class="side-nav">
        <li *ngFor="let route of navigationList">
          <a *ngIf="!route.children" [routerLink]="[route.name]">
            {{ route.data.label || route.name }}
          </a>
          <a *ngIf="route.children" (click)="route.open = !route.open">
            {{ route.name }}
          </a>
          <div *ngIf="route.children" [class.open]="route.open" class="collapsible-body">
            <ul>
              <li *ngFor="let child of route.children">
                <a [routerLink]="[child.name]">
                  {{ child.data.label || child.name }}
                </a>
              </li>
            </ul>
          </div>
        </li>
        
      </ul>
      <div class="button-collapse" [class.hidden]="sideNavOpen" (click)="toggleSideNav()">
        <i class="material-icons">menu</i>
      </div>
    </nav>      
  `,
  styles: [`
    @media only screen and (max-width: 991px) {
      nav:not(.open) {
        padding: 0.5em 2em;
        box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
      }
    }
    
    .side-nav {
      position: fixed;
      width: 240px;
      left: 0;
      top: 0;
      margin: 0;
      height: 100%;
      height: calc(100% + 60px);
      height: -moz-calc(100%);
      padding-bottom: 60px;
      z-index: 999;
      backface-visibility: hidden;
      overflow-y: auto;
      will-change: transform;
      transform: translateX(-105%);
      -webkit-transition: all 600ms cubic-bezier(0.62, -0.005, 0.26, 0.995);
      -moz-transition: all 600ms cubic-bezier(0.62, -0.005, 0.26, 0.995);
      transition: all 600ms cubic-bezier(0.62, -0.005, 0.26, 0.995);
    }

    .side-nav.open {
      transform: translateX(0%);
    }

    .collapsible {
      margin: 0;
    }

    li {
      float: none;
    }

    .collapsible-body {
      max-height:0;
      overflow:hidden;
      -webkit-transition: all 400ms cubic-bezier(0.62, -0.005, 0.26, 0.995);
      -moz-transition: all 400ms cubic-bezier(0.62, -0.005, 0.26, 0.995);
      transition: all 400ms cubic-bezier(0.62, -0.005, 0.26, 0.995);
    }

    .collapsible-body a {
      font-size: 0.9rem;
      padding-left: 4em;
    }

    .collapsible-body.open {
      max-height: 600px;
    }

    li.active {
       background-color: rgba(0,0,0,.05);
    }

    a {
      display: block;
      font-size: 1rem;
      cursor:pointer;
    }

    .router-link-active {
      font-weight: 500;
      background-color: rgba(0,0,0,0.1);
    }

    // Collapse button
    .button-collapse {
      float: left;
      position: relative;
      z-index: 1;
      height: 56px;
    }

    .hidden {
      display:none;
    }

    .button-collapse i {
      font-size: 2.7rem;
      height: 56px;
      line-height: 56px;
    }    
  `],
  directives: [...ROUTER_DIRECTIVES]
})

export class TlNavigationComponent implements OnInit {
  @Input() display: string;
  @Input() routes: Array<any>;
  @Output() navState = new EventEmitter();

  sideNavOpen: boolean;
  width: number = window.innerWidth;
  currentUser: Member | Boolean;
  navigationList: Array<any>

  constructor(
    private _memberService: MemberService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.checkSideNavState();

    var source = this._memberService.getCurrent();

    this._memberService
      .getCurrent()
      .subscribe(user => {
        this.currentUser = user;
        this.routes = this.routes.filter(route => {
          var roleValidated = isUserAuthenticatedSync(route.data.roles, user);
          return route.data.display === this.display && roleValidated;
        });
        this.generateNavList(this.routes);  
      }); 
    
  }

  generateNavList(routeList: Array<any>) {
    let tempParentNavList = {};
    let tempSoloNavList = [];

    let order = 0;

    for (let i = 0; i < routeList.length; i++) {
      if (routeList[i].data.parent) {
        if(!tempParentNavList[routeList[i].data.parent]) {
          tempParentNavList[routeList[i].data.parent] = {
            name: routeList[i].data.parent,
            children: [routeList[i]],
            order: parseInt(order+''),
            open: false
          };
          order++;
        } else {
           tempParentNavList[routeList[i].data.parent].children.push(routeList[i]);
        }
      } else {
        routeList[i].order = parseInt(order+'');
        tempSoloNavList.push(routeList[i]);
        order++;
      }
    }

    for (let parent in tempParentNavList) {
      tempSoloNavList.push(tempParentNavList[parent]);
    }

    this.navigationList = tempSoloNavList.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      } else if (a.order > b.order) {
        return 1;
      }

      return 0;
    });

    this.navigationList.map(navItem => {
      if (navItem.children) {
        for (let i = 0; i < navItem.children.length; i++) {
          if(this.isActive([navItem.children[i].name])) {
            navItem.open = true;
            break;
          }
        }
      }
    });

    console.log(this.navigationList);
  }

  isActive(route: any[]) {
    return this._router.isRouteActive(this._router.generate(route));
  }

  onResize(event) {
    if (this.width !== event.target.innerWidth){
      this.width = event.target.innerWidth;
      this.checkSideNavState();
    }
  }

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
    this.navState.emit(this.sideNavOpen);
  }

  checkSideNavState() {   
    this.sideNavOpen = this.width >= 992;
    this.navState.emit(this.sideNavOpen);
  }


}
import { 
  Component, 
  OnInit, 
  Input, 
  Output,  
  EventEmitter
} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { 
  isUserAuthenticatedSync, 
  MemberService, 
  Member 
} from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-navigation',
  template: `  
    <nav (window:resize)="onResize($event)">
      <ul [class.open]="sideNavOpen" class="side-nav">
        <li *ngFor="let route of routes">
          <a [routerLink]="[route.name]">
                {{ route.data.label || route.name }}
          </a>
        </li>
        
      </ul>
      <div class="button-collapse" [class.hidden]="sideNavOpen" (click)="toggleSideNav()">
        <i class="material-icons">menu</i>
      </div>
    </nav>      
  `,
  styles: [`
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

    .open {
      transform: translateX(0%);
    }

    .collapsible {
      margin: 0;
    }

    li {
      float: none;
    }

    li.active {
       background-color: rgba(0,0,0,.05);
    }

    a {
      display: block;
      font-size: 1rem;
      padding: 0;
    }

    .router-link-active {
      background-color: rgba(0,0,0,.05);
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

  constructor(
    private _memberService: MemberService
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
      }); 
    
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
import { Component, OnInit, Input, Output, NgZone, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Location } from '@angular/common';

import { MemberService, Member } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-navigation',
  template: `  
    <nav>
      <ul [class.open]="sideNavOpen" class="side-nav">
        <li *ngFor = "let route of routes">
          <a [routerLink]="[route.name]">
                {{ route.name }}
          </a>
        </li>
      </ul>
      <div [class.button-collapse]="!sideNavOpen" (click)="toggleSideNav()">
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
  currentUser: Member;

  constructor(
    private _location: Location,
    private _ngZone: NgZone,
    private _memberService: MemberService
  ) { 
    window.onresize = (e) =>
    {
        _ngZone.run(() => {
            this.width = window.innerWidth;
            this.checkSideNavState();        
        });
    };
  }

  ngOnInit() {
    this.checkSideNavState();

    var source = this._memberService.getCurrent();
    console.log(source.getValue());    

    this._memberService
      .getCurrent()
      .subscribe(user => {
        this.currentUser = user;
        this.routes = this.routes.filter((route) => {
          return route.data.display === this.display; 
        });      
      }); 

    
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

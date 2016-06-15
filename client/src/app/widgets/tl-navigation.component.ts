import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { RouteList } from '../shared/router/index';

@Component({
  moduleId: module.id,
  selector: 'tl-navigation',
  template: `  
    <nav>
      <ul class="left side-nav fixed" *ngFor = "let route of routeList">
        <li><a [routerLink]="[route.name]">{{route.name}}</a></li>
      </ul>
      <ul id="slide-out" class="side-nav" *ngFor = "let route of routeList">
        <li><a [routerLink]="[route.name]">{{route.name}}</a></li>
      </ul>
      <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
    </nav>      
  `,
  styles: [`
    .side-nav {
      position: fixed;
      width: 240px;
      left: 0;
      top: 0;
      margin: 0;
      transform: translateX(-100%);
      height: 100%;
      height: calc(100% + 60px);
      height: -moz-calc(100%); //Temporary Firefox Fix
      padding-bottom: 60px;
      background-color: $sidenav-bg-color;
      z-index: 999;
      backface-visibility: hidden;
      overflow-y: auto;
      will-change: transform;
      backface-visibility: hidden;
      transform: translateX(-105%);

      .collapsible {
        margin: 0;
      }


      li {
        float: none;
        line-height: $sidenav-item-height;

        &.active { background-color: rgba(0,0,0,.05); }
      }

      a {
        color: $sidenav-font-color;
        display: block;
        font-size: 1rem;
        height: $sidenav-item-height;
        line-height: $sidenav-item-height;
        padding: 0 $sidenav-padding-right;

        &:hover { background-color: rgba(0,0,0,.05);}

        &.btn, &.btn-large, &.btn-flat, &.btn-floating {
          margin: 10px 15px;
        }

        &.btn,
        &.btn-large,
        &.btn-floating { color: $button-raised-color; }
        &.btn-flat { color: $button-flat-color; }

        &.btn:hover,
        &.btn-large:hover { background-color: lighten($button-raised-background, 5%); }
        &.btn-floating:hover { background-color: $button-raised-background; }
      }
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})

export class TlNavigationComponent implements OnInit {
  @Input() display: string;

  routeList = RouteList

  constructor() { }

  ngOnInit() {
    this.routeList = this.routeList.filter((route) => {
      return route.data.display === this.display;
    });
  }

}

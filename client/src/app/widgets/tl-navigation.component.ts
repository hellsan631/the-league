import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'tl-navigation',
  template: `  
    <nav>
      <ul [class.open]="true" class="side-nav">
        <li *ngFor = "let route of routes">
          <a [routerLink]="[route.name]">
                {{ route.name }}
          </a>
        </li>
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

  `],
  directives: [...ROUTER_DIRECTIVES]
})

export class TlNavigationComponent implements OnInit {
  @Input() display: string;
  @Input() routes: Array<any>;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.routes = this.routes.filter((route) => {
      return route.data.display === this.display;
    });
  }
}

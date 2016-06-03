import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { RouteList } from '../shared/router/index';

@Component({
  moduleId: module.id,
  selector: 'tl-navigation',
  template: `  
  <nav *ngFor = "let route of routeList">
    <a [routerLink]="[route.name]">{{route.name}}</a>
  </nav>      
  `,
  styles: [],
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

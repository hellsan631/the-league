import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { RouteList } from '../shared/router/index';


@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  template: `  
  <nav *ngFor = "let route of routeList">
    <a [routerLink]="[route.name]">{{route.name}}</a>
  </nav>      
  `,
  styles: [],
  directives: [ROUTER_DIRECTIVES]
})
export class TlNavigationComponent implements OnInit {

  routeList = RouteList

  constructor() { }

  ngOnInit() {
    
  }

}

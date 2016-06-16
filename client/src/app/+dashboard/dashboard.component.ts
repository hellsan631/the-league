import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, CanActivate } from '@angular/router-deprecated';

import { LoggerService, SecureRoute } from '../shared/index';
import { TlContentComponent, TlNavigationComponent } from '../widgets/index';
import { DASHBOARD_ROUTES  } from './dashboard.routes';

@RouteConfig(DASHBOARD_ROUTES)

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    TlContentComponent, 
    TlNavigationComponent, 
    ...ROUTER_DIRECTIVES
  ]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class DashboardComponent implements OnInit {

  menuOpen: boolean;

  routeList = DASHBOARD_ROUTES;

  constructor(
    private _LoggerService: LoggerService  
  ) {
    
  }

  ngOnInit() {
   
  }

  handleMenuOpen(event) {
    this.menuOpen = event;
  }
}



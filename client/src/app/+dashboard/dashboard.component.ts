import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/index';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../shared/index';
import { TlNavigationComponent } from '../widgets/index';
import { DASHBOARD_ROUTES  } from './dashboard.routes';

@RouteConfig(DASHBOARD_ROUTES)

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [TlNavigationComponent, ...ROUTER_DIRECTIVES]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class DashboardComponent implements OnInit {

  routeList = DASHBOARD_ROUTES;

  constructor(
    private _LoggerService: LoggerService  
  ) {
    
  }

  ngOnInit() {
   
  }

  navBarState(value) {
    console.log(`Navbar is visible: ${value}`);
  }
}



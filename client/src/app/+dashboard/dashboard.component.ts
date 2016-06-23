import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

import { LoggerService } from '../shared/index';
import { TlContentComponent, TlNavigationComponent } from '../widgets/index';
import { DASHBOARD_ROUTES  } from './dashboard.routes';

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



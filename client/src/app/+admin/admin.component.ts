import { Component, OnInit } from '@angular/core';
import { CanActivate, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { TlContentComponent, TlNavigationComponent } from '../widgets/index';

import { SecureRoute } from '../shared/index';
import { ADMIN_ROUTES } from './admin.routes';

@RouteConfig(ADMIN_ROUTES)

@Component({
  moduleId: module.id,
  selector: 'tl-admin',
  templateUrl: 'admin.component.html',
  styles: [`
    
  `],
  directives: [
    TlContentComponent, 
    TlNavigationComponent, 
    ...ROUTER_DIRECTIVES
  ]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class AdminComponent implements OnInit {

  routeList = ADMIN_ROUTES;

  menuOpen: boolean;

  constructor() { }

  ngOnInit() {

  }

  handleMenuOpen(event) {
    this.menuOpen = event;
  }
}

import { RouteDefinition } from '@angular/router-deprecated';
import { PicksComponent } from './+picks/index';


export const DASHBOARD_ROUTES: RouteDefinition[] = [
  { 
    path: '/', 
    name: 'Picks', 
    component: PicksComponent, 
    data: {
      display: 'dashboard',
      roles: ['user', 'admin'],
      redirect: 'Login'
    }
  }
];
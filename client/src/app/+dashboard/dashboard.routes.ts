import { RouteDefinition } from '@angular/router-deprecated';
import { PicksComponent } from './+picks/index';
import { WeekComponent } from './+week/index';
import { LogoutComponent } from '../+logout/index'


export const DASHBOARD_ROUTES: RouteDefinition[] = [
  { 
    path: '/picks', 
    name: 'Picks', 
    component: PicksComponent, 
    data: {
      display: 'dashboard',
      roles: ['user', 'admin'],
      redirect: 'Login'
    },
    useAsDefault: true
  },
  { 
    path: '/week', 
    name: 'Week', 
    component: WeekComponent, 
    data: {
      display: 'dashboard',
      roles: ['user', 'admin'],
      redirect: 'Login'
    }
  },
  { 
    path: '/admin', 
    name: 'Admin', 
    component: WeekComponent, 
    data: {
      display: 'dashboard',
      roles: ['admin'],
      redirect: 'Login'
    }
  }
  ,
  { 
    path: '../logout', 
    name: '../Logout', 
    component: LogoutComponent, 
    data: {
      display: 'dashboard',
      roles: ['user','admin'],
      redirect: 'Login',
      label: 'Logout'
    }
  }
];
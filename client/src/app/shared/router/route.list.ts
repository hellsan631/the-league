import { RouteDefinition } from '@angular/router-deprecated';

import { LoginComponent } from '../../+login/index';
import { RegisterComponent } from '../../+register/index';
import { DashboardComponent } from '../../+dashboard/index';


export const ROUTE_LIST: RouteDefinition[] = [
  {
    path: '/login',
    name: 'Login', 
    component: LoginComponent,
    data: {
      display: 'landing',
      roles: ['guest'],
      redirect: 'Dashboard'
    },
    useAsDefault: true
  },
  { 
    path: '/register', 
    name: 'Register', 
    component: RegisterComponent,
    data: {
      display: 'landing',
      roles: ['guest'],
      redirect: 'Dashboard'
    }
  },
  { 
    path: '/dashboard/...', 
    name: 'Dashboard', 
    component: DashboardComponent, 
    data: {
      display: 'dashboard',
      roles: ['user', 'admin'],
      redirect: 'Login'
    } 
  }
];
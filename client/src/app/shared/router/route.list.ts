import { LoginComponent } from '../../+login/index';
import { RegisterComponent } from '../../+register/index';
import { DashboardComponent } from '../../+dashboard/index';
import { RouteDefinition } from '@angular/router-deprecated';

export const RouteList: RouteDefinition[] = [
  {
    path: '/login',
    name: 'Login', 
    component: LoginComponent 
  },
  { 
    path: '/register', 
    name: 'Register', 
    component: RegisterComponent 
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: DashboardComponent, 
    data: {
      roles: ['user', 'admin'],
      redirect: 'Login'
    } 
  }
];
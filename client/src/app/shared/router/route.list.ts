import { RouterConfig } from '@angular/router';

import { LoginComponent } from '../../+login/login.component';
import { LogoutComponent } from '../../+logout/logout.component';
import { RegisterComponent } from '../../+register/register.component';
import { DashboardComponent } from '../../+dashboard/dashboard.component';


export const ROUTE_LIST: RouterConfig = [
  {
    path: '',
    redirectTo: '/login',
    terminal: true
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/register',
    component: RegisterComponent
  },
  {
    path: '/dashboard/...',
    component: DashboardComponent
  },
  {
    path: '/logout',
    component: LogoutComponent
  },
];
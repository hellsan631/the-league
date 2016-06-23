import { RouterConfig } from '@angular/router';
import { PicksComponent } from './+picks/index';
import { WeekComponent } from './+week/index';
import { LogoutComponent } from '../+logout/index'


export const DASHBOARD_ROUTES: RouterConfig = [
  { 
    path: '/picks', 
    component: PicksComponent
  },
  { 
    path: '/week',  
    component: WeekComponent
  },
  { 
    path: '/admin',
    component: WeekComponent
  }
  ,
  { 
    path: '../logout',
    component: LogoutComponent
  }
];
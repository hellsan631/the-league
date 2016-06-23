import { provideRouter  } from '@angular/router';

import { ROUTE_LIST } from './shared/router/route.list';
import { DASHBOARD_ROUTES } from './+dashboard/dashboard.routes';

export const APP_ROUTER_PROVIDERS = [
  provideRouter([
    ...ROUTE_LIST
    ])
];
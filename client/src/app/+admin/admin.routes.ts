import { RouteDefinition } from '@angular/router-deprecated';

import { GameManagementComponent } from '../+admin/+game/index'
import { UsersComponent } from '../+admin/+users/index'
import { TeamManagementComponent } from '../+admin/+team/index'
import { TransactionsComponent } from '../+admin/+transactions/index'

export const ADMIN_ROUTES: RouteDefinition[] = [
  { 
    path: '/users', 
    name: 'Users', 
    component: UsersComponent, 
    data: {
      display: 'dashboard',
      roles: ['admin'],
      redirect: 'Login',
      parent: 'Admin'
    }
  },
  { 
    path: '/transactions', 
    name: 'Transactions', 
    component: TransactionsComponent, 
    data: {
      display: 'dashboard',
      roles: ['admin'],
      redirect: 'Login',
      parent: 'Admin'
    }
  },
  { 
    path: '/game-management', 
    name: 'Game Management', 
    component: GameManagementComponent, 
    data: {
      display: 'dashboard',
      roles: ['admin'],
      redirect: 'Login',
      parent: 'Admin'
    }
  },
  { 
    path: '/team-management', 
    name: 'Team Management', 
    component: TeamManagementComponent, 
    data: {
      display: 'dashboard',
      roles: ['admin'],
      redirect: 'Login',
      parent: 'Admin'
    }
  },
]
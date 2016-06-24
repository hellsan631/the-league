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
      display: 'admin',
      roles: ['admin'],
      redirect: 'Login'
    },
    useAsDefault: true
  },
  { 
    path: '/game-management', 
    name: 'Game Management', 
    component: GameManagementComponent, 
    data: {
      display: 'admin',
      roles: ['admin'],
      redirect: 'Login',
      parent: 'NFL'
    }
  },
  { 
    path: '/transactions', 
    name: 'Transactions', 
    component: TransactionsComponent, 
    data: {
      display: 'admin',
      roles: ['admin'],
      redirect: 'Login'
    }
  },
  { 
    path: '/team-management', 
    name: 'Team Management', 
    component: TeamManagementComponent, 
    data: {
      display: 'admin',
      roles: ['admin'],
      redirect: 'Login',
      parent: 'NFL'
    }
  }
]
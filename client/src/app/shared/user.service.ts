import { Injectable } from '@angular/core';
import { UserInterface } from '../shared';
import { Member } from '../shared/models';

@Injectable()

export class UserService extends UserInterface {

  user: Member;

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  hasRole(): boolean {
    return true;
  }

  // other auth functionality, sign-in, token handling etc
}
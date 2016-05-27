export abstract class UserInterface {
  // is the current user authenticated?
  abstract isAuthenticated():boolean;

  // does the current user have one of these roles?
  abstract hasRole(roles: string[]):boolean;
}
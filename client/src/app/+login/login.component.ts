import { Component, OnInit } from '@angular/core';

import { 
  Router, 
  ROUTER_DIRECTIVES, 
  CanActivate 
} from '@angular/router-deprecated';

import { ROUTE_LIST } from '../shared/router/index';

import { 
  Credentials, 
  Member, 
  MemberService, 
  SecureRoute 
} from '../shared/index';

import { 
  TlInputComponent, 
  TlNavigationComponent, 
  TlContentComponent 
} from '../widgets/index';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    TlInputComponent, 
    TlContentComponent, 
    TlNavigationComponent, 
    ...ROUTER_DIRECTIVES
  ]
})

@CanActivate(next => {    
  return SecureRoute(next);
})

export class LoginComponent implements OnInit {

  credentials: Credentials = {
    email: '',
    password: ''
  };
  
  member: Member;

  routeList = ROUTE_LIST;

  constructor(
    private _memberService: MemberService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  
  login() {    
    this._memberService
      .login(this.credentials)
      .subscribe(
        () => { this._router.navigate(['Dashboard']); },
        error => console.log(error)
      );
  }

}

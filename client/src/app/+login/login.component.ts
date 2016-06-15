import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router-deprecated';

import { MemberService, SecureRoute } from '../shared';
import { Credentials, Member } from '../shared/models';
import { TlNavigationComponent } from '../widgets';
import { ROUTE_LIST } from '../shared/router/index';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [TlNavigationComponent]
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

import { Component, OnInit } from '@angular/core';

import { 
  Router, 
  ROUTER_DIRECTIVES 
} from '@angular/router';

import { ROUTE_LIST } from '../shared/router/route.list';

import { 
  Credentials, 
  Member, 
  MemberService 
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

export class LoginComponent implements OnInit {

  credentials: Credentials = {
    email: '',
    password: ''
  };
  
  member: Member;

  routeList = ROUTE_LIST;

  menuOpen: boolean;

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

  handleMenuOpen(open) {
    this.menuOpen = open;
  }

}

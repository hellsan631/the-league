import { Component, OnInit } from '@angular/core';
import { MemberService, UserService } from './shared';
import { Member } from './shared/models';
import { LoginComponent } from './+login';
import { RegisterComponent } from './+register';
import { DashboardComponent } from './+dashboard';
import { SecureRouterComponent } from './shared/secure-router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'the-league-app',
  templateUrl: 'the-league.component.html',
  styleUrls: ['the-league.component.css'],
  providers: [
    ROUTER_PROVIDERS,
    MemberService,
    UserService
  ],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/register', name: 'Register', component: RegisterComponent },
  { path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true }
])

export class TheLeagueAppComponent implements OnInit {
  title = 'the-league works!';
  user: Member;

  constructor(
    private _memberService: MemberService
    //private router: Router
  ) {

  }

  ngOnInit() {
  }
}

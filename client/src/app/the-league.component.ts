import { Component, OnInit } from '@angular/core';
import { MemberService } from './shared';
import { Member } from './shared/models';
import { LoginComponent } from './+login';
import { RegisterComponent } from './+register';
import { DashboardComponent } from './+dashboard';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'the-league-app',
  templateUrl: 'the-league.component.html',
  styleUrls: ['the-league.component.css'],
  providers: [ROUTER_PROVIDERS, MemberService],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/login', component: LoginComponent},
  {path: '/register', component: RegisterComponent},
  {path: '/dashboard', component: DashboardComponent}

])

export class TheLeagueAppComponent implements OnInit {
  title = 'the-league works!';
  user: Member;
  
  constructor(
    private _memberService: MemberService,
    private router: Router
  ) {
    
  }
  
  ngOnInit() {
  }
}

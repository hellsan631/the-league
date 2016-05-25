import { Component, OnInit } from '@angular/core';
import { MemberService } from './shared/member.service';
import { Member } from './shared/models/index';
import { LoginComponent } from './+login';
import { RegisterComponent } from './+register';
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
  {path: '/register', component: RegisterComponent}
])

export class TheLeagueAppComponent implements OnInit {
  title = 'the-league works!';
  user: Member;
  
  constructor(
    private _memberService: MemberService,
    public router: Router
  ) {
    
  }
  
  ngOnInit() {
    /*
      this._memberService
        .login({
          email: "matkle414@gmail.com", password: "123456"
        })
        .subscribe(user => this.user = user);
    */
  }
}

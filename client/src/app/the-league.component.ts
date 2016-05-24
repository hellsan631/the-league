import { Component, OnInit } from '@angular/core';
import { MemberService } from './shared/member.service';
import { Member } from './shared/models/index';

@Component({
  moduleId: module.id,
  selector: 'the-league-app',
  templateUrl: 'the-league.component.html',
  styleUrls: ['the-league.component.css'],
  providers: [MemberService]
})
export class TheLeagueAppComponent implements OnInit {
  title = 'the-league works!';
  user: Member;
  
  constructor(
    private _memberService: MemberService
  ) {
    
  }
  
  ngOnInit() {
    this._memberService
      .login({
        email: "matkle414@gmail.com", password: "123456"
      })
      .subscribe(user => this.user = user);
  }
}

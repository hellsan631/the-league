import { Component, OnInit } from '@angular/core';
import { MemberService } from './shared/member.service';

@Component({
  moduleId: module.id,
  selector: 'the-league-app',
  templateUrl: 'the-league.component.html',
  styleUrls: ['the-league.component.css'],
  providers: [MemberService]
})
export class TheLeagueAppComponent implements OnInit {
  title = 'the-league works!';
  heroes;
  
  constructor(
    private _memberService: MemberService) {
  }
  
  ngOnInit() {
    this._memberService.login()
      .subscribe(heroes => this.heroes = heroes);
  }
}

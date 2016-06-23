import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter} from '@angular/router';
import { MemberService, LoggerService } from './shared';
import { Member } from './shared/models';
import { TlLoginButtonComponent } from './widgets';


@Component({
  moduleId: module.id,
  selector: 'the-league-app',
  templateUrl: 'the-league.component.html',
  styleUrls: ['the-league.component.css'],
  providers: [
    provideRouter,
    MemberService,
    LoggerService
  ],
  directives: [
    ...ROUTER_DIRECTIVES,
    TlLoginButtonComponent
  ]
})

export class TheLeagueAppComponent implements OnInit {
  title = 'the-league works!';
  user: Member;
  modalOpen: boolean;

  constructor(
    private _memberService: MemberService,
    private _logger: LoggerService
  ) {

  }

  ngOnInit() {    
    this._logger.events.subscribe(event => {
      this.modalOpen = event.value === 'open';
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MemberService, LoggerService } from './shared';
import { Member } from './shared/models';
import { ROUTE_LIST } from './shared/router/index';
import { TlLoginButtonComponent } from './widgets';

@Component({
  moduleId: module.id,
  selector: 'the-league-app',
  templateUrl: 'the-league.component.html',
  styleUrls: ['the-league.component.css'],
  providers: [
    ROUTER_PROVIDERS,
    MemberService,
    LoggerService
  ],
  directives: [
    ...ROUTER_DIRECTIVES,
    TlLoginButtonComponent
  ]
})

@RouteConfig(ROUTE_LIST)

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

import { Component, OnInit } from '@angular/core';

import { 
  Router, 
  ROUTER_DIRECTIVES
} from '@angular/router';

import { 
  Credentials, 
  Member, 
  MemberService 
} from '../shared/index';


@Component({
  moduleId: module.id,
  selector: 'tl-logout',
  template: `
    <div>
    </div>
  `,
  styles: [``],
  directives: [
    ...ROUTER_DIRECTIVES
  ]
})

export class LogoutComponent implements OnInit {

  constructor(
    private _memberService: MemberService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.logout();
  }
  
  logout() {    
    this._memberService
      .logout()
      .subscribe(
        () => { this._router.navigate(['Login']); },
        error => console.log(error)
      );
  }
}

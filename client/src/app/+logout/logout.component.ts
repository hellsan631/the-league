import { Component, OnInit } from '@angular/core';

import { 
  Router, 
  ROUTER_DIRECTIVES, 
  CanActivate 
} from '@angular/router-deprecated';

import { 
  Credentials, 
  Member, 
  MemberService, 
  SecureRoute 
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

@CanActivate(next => {    
  return SecureRoute(next);
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

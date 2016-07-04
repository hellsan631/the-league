import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';
import { MemberService, Member } from '../../shared/index';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'tl-users',
  template: `
  	<div class="container">
      <div class="row">
        <div class="col s12">
          <h2>Users</h2>
          <ul>
            <li *ngFor="let member of memberList | async">
              {{ member.email }}
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  `,
  styles: [`
    
  `],
  providers: [MemberService]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class UsersComponent implements OnInit {
  memberList: any;

  constructor(
    private _memberService: MemberService
  ) { }

  ngOnInit() {
    this.memberList = this.getMembersList();
  }

  getMembersList(): Observable<any> {
    return this._memberService.find();
  }
}
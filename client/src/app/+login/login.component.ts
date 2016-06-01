import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared';
import { Credentials, Member } from '../shared/models';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {
    email: '',
    password: ''
  };
  
  member: Member;

  constructor(
    private _memberService: MemberService,
    private _router: Router  
  ) { }

  ngOnInit() {
  }
  
  login() {    
    this._memberService
      .login(this.credentials)
      .subscribe(
        () => this._router.navigate(['Dashboard']),
        error => console.log(error)
      );
  }

}

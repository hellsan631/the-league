import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _membersService: MemberService) { }

  ngOnInit() {
  }
  
  login() {
    alert(`Login: ${this.email} // Password: ${this.password}`)
  }

}

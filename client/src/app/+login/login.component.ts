import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/index';
import { Credentials } from '../shared/models';

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

  constructor(private _membersService: MemberService) { }

  ngOnInit() {
  }
  
  login(thing) {
    
    console.log(thing);
    
    alert(`Login: ${this.credentials.email} // Password: ${this.credentials.password}`)
  }

}

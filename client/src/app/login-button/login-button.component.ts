import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { MemberService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-login-button',
  template: `
  <div>
    <button class="btn" (click)="buttonClick()">{{ buttonText }}</button>
  </div>
  `,
  styleUrls: ['login-button.component.css'] 
})
export class LoginButtonComponent implements OnInit {
  
  buttonText: string = 'login';
  userIsLoggedIn: boolean = false;

  constructor(
    private _router: Router,
    private _memberService: MemberService
  ) {}

  ngOnInit() {
    this._memberService
      .getCurrent()
      .subscribe(user => {
        if (user) {
          this.userIsLoggedIn = true
          this.setButtonText();
        } else {
          this.userIsLoggedIn = false;
          this.setButtonText();
        }
      });
  }
  
  buttonClick() {
    if (this.userIsLoggedIn) {
      this._memberService
        .logout()
        .subscribe(message => {
          this.userIsLoggedIn = false;
          this.setButtonText();
          
          //@TODO: This should navigate to the main page
          this._router.navigate(['Register']);
        })      
    } else {
      this._router.navigate(['Login']);
    }
  }
  
  setButtonText() {  
    this.buttonText = (this.userIsLoggedIn) ? 'Logout' : 'Login';
  }
}

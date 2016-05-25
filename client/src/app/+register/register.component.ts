import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/models';
import { MemberService } from '../shared/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

  registration: Registration

  member: Member

  constructor(
    private _memberService: MemberService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.registration = {
      email: '',
      password: '',
      validatePassword: ''
    }
  }

  register() {
    if (this.registration.password !== this.registration.validatePassword) {
      return alert('bad things');
    }
    this._memberService.create(this.registration)
      .subscribe(
        member => {
          alert('good things');
          this._memberService.login({
            email: this.registration.email, 
            password: this.registration.password
          })
            .subscribe(
              () => this._router.navigate(['/dashboard'])
            )
        },
        error => console.log(error)
      )
  }

}

export interface Registration {
  email: string
  password: string
  validatePassword: string
}

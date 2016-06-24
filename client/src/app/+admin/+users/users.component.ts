import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-users',
  template: `
  	<div>
      <p>Users</p>
    </div>
  `,
  styles: [`
    
  `]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
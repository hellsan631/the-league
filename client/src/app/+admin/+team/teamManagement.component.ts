import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-team-management',
  template: `
  	<div>
      <p>Team Management</p>
    </div>
  `,
  styles: [`
    
  `]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class TeamManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

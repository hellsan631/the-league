import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-picks',
  template: `
  	<div>
      <p>picks</p>
    </div>
  `,
  styles: [`
    
  `]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

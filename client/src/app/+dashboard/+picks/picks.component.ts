import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-picks',
  template: `
  	<div class="abc">
      <p>picks</p>
    </div>
  `,
  styles: [`
    .abc {
      padding: 10px 10px 10px 350px;
    }
  `]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class PicksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

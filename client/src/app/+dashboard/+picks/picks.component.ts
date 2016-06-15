import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-picks',
  template: `
  haha
  `,
  styles: [`
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

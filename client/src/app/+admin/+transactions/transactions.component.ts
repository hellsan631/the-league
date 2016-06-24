import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tl-transactions',
  template: `
  	<div>
      <p>Transactions</p>
    </div>
  `,
  styles: [`
    
  `]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class TransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
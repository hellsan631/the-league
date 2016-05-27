import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SecureRouterOutletComponent } from './secure-router-outlet.component';

describe('Component: SecureRouterOutlet', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SecureRouterOutletComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SecureRouterOutletComponent],
      (component: SecureRouterOutletComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SecureRouterOutletComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SecureRouterOutletComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-secure-router-outlet></app-secure-router-outlet>
  `,
  directives: [SecureRouterOutletComponent]
})
class SecureRouterOutletComponentTestController {
}


import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {League} from './league.model';

describe('League', () => {
  it('should create an instance', () => {
    expect(new League()).toBeTruthy();
  });
});

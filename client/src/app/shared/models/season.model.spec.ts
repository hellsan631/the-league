import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Season} from './season.model';

describe('Season', () => {
  it('should create an instance', () => {
    expect(new Season()).toBeTruthy();
  });
});

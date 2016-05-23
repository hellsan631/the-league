import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Team} from './team.model';

describe('Team', () => {
  it('should create an instance', () => {
    expect(new Team()).toBeTruthy();
  });
});

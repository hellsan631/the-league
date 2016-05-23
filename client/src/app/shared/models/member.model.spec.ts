import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Member} from './member.model';

describe('Member', () => {
  it('should create an instance', () => {
    expect(new Member()).toBeTruthy();
  });
});

import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Loopback} from './loopback.provider';

describe('Loopback', () => {
  it('should create an instance', () => {
    expect(new Loopback()).toBeTruthy();
  });
});

import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LoopbackProvider } from './loopback.provider';

describe('Loopback Service', () => {
  beforeEachProviders(() => [LoopbackProvider]);

  it('should ...',
      inject([LoopbackProvider], (service: LoopbackProvider) => {
    expect(service).toBeTruthy();
  }));
});

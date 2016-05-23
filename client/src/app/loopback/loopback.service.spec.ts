import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LoopbackService } from './loopback.service';

describe('Loopback Service', () => {
  beforeEachProviders(() => [LoopbackService]);

  it('should ...',
      inject([LoopbackService], (service: LoopbackService) => {
    expect(service).toBeTruthy();
  }));
});

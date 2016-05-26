import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Logger Service', () => {
  beforeEachProviders(() => [LoggerService]);

  it('should ...',
      inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));
});

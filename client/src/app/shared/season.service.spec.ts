import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SeasonService } from './season.service';

describe('Season Service', () => {
  beforeEachProviders(() => [SeasonService]);

  it('should ...',
      inject([SeasonService], (service: SeasonService) => {
    expect(service).toBeTruthy();
  }));
});

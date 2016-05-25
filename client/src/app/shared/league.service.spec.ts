import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LeagueService } from './league.service';

describe('League Service', () => {
  beforeEachProviders(() => [LeagueService]);

  it('should ...',
      inject([LeagueService], (service: LeagueService) => {
    expect(service).toBeTruthy();
  }));
});

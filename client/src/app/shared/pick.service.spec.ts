import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PickService } from './pick.service';

describe('Pick Service', () => {
  beforeEachProviders(() => [PickService]);

  it('should ...',
      inject([PickService], (service: PickService) => {
    expect(service).toBeTruthy();
  }));
});

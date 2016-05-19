import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TheLeagueAppComponent } from '../app/the-league.component';

beforeEachProviders(() => [TheLeagueAppComponent]);

describe('App: TheLeague', () => {
  it('should create the app',
      inject([TheLeagueAppComponent], (app: TheLeagueAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'the-league works!\'',
      inject([TheLeagueAppComponent], (app: TheLeagueAppComponent) => {
    expect(app.title).toEqual('the-league works!');
  }));
});

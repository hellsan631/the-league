import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TheLeagueAppComponent, environment } from './app/';
import { LoopbackProvider } from './app/loopback/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(TheLeagueAppComponent, [HTTP_PROVIDERS, LoopbackProvider]);


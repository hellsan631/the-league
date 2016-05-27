import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TheLeagueAppComponent, environment } from './app/';
import { LoopbackProvider } from './app/loopback/index';
import { LoggerService } from './app/shared/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(TheLeagueAppComponent, [
  HTTP_PROVIDERS,
  LoopbackProvider,
  LoggerService
]);


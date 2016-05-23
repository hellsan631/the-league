import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TheLeagueAppComponent, environment } from './app/';
import { LoopbackService } from './app/shared/loopback.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(TheLeagueAppComponent, [HTTP_PROVIDERS, LoopbackService]);


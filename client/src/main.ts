import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { 
  LoopbackProvider, 
  LoggerService, 
  appInjector, 
  TheLeagueAppComponent, 
  environment 
} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TheLeagueAppComponent, [
  HTTP_PROVIDERS,
  LoopbackProvider,
  LoggerService,
])
.then((appRef) => appInjector(appRef.injector));


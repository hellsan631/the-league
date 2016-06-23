import 'es6-shim';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app/tl.routes';

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
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  LoopbackProvider,
  LoggerService,
])
.then((appRef) => appInjector(appRef.injector));


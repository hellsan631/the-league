import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

console.log('imported Angular');

import { 
  LoopbackProvider, 
  LoggerService, 
  appInjector, 
  TheLeagueAppComponent, 
  environment 
} from './app/index';

console.log('main');

if (environment.production) {
  enableProdMode();
}

bootstrap(TheLeagueAppComponent, [
  HTTP_PROVIDERS,
  LoopbackProvider,
  LoggerService,
])
.then((appRef) => appInjector(appRef.injector));


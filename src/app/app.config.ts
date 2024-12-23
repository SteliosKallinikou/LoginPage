import {APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {configFactory, UserDataService} from './shared/services/user-data-service.service';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),provideHttpClient(),{
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      multi: true,
      deps: [UserDataService]
    },]

};

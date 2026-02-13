import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  provideHttpClient,
  withFetch,
  withJsonpSupport,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideEntityData, withEffects } from '@ngrx/data';
// import { entityConfig } from './entity-metadata';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      router: routerReducer,
    }),
    // provideRouterStore(),
    // provideStoreDevtools({
    //     maxAge: 25, // Retains last 25 states
    //     logOnly: !isDevMode(), // Restrict extension to log-only mode
    //     autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    //     trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    //     traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    //     connectInZone: true, // If set to true, the connection is established within the Angular zone
    // }),
    provideHttpClient(withFetch(), withJsonpSupport()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
        },
    }),
    // provideEntityData(withEffects()),
    // provideEffects(),
    // provideRouterStore()
],
};

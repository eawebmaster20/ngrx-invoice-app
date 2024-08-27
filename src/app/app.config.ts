import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomDatePipe } from './shared/pipes/custom-date.pipe';
import { counterReducer } from './counterState/counter.reducer';
import { invoiceReducer } from './shared/state/invoice.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    CustomDatePipe,
    provideRouter(routes), 
    provideStore(),
    provideHttpClient(withFetch()),
    provideState(
      {
      name: 'counter',
      reducer: counterReducer,
    }),
    provideState({
      name: 'invoices',
      reducer: invoiceReducer,
    }),
    provideStoreDevtools({maxAge:25, logOnly: false}),
    provideAnimationsAsync()
  ]
};

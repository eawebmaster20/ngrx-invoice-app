import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomDatePipe } from './shared/pipes/custom-date.pipe';
import { invoiceReducer } from './shared/state/invoice.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InvoiceEffects } from './shared/state/invoice.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    CustomDatePipe,
    provideRouter(routes), 
    provideStore(),
    provideHttpClient(withFetch()),
    provideState({
      name: 'invoices',
      reducer: invoiceReducer,
    }),
    provideEffects(InvoiceEffects),
    provideStoreDevtools({maxAge:25, logOnly: false}),
    provideAnimationsAsync()
  ]
};

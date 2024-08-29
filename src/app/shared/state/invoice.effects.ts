import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as InvoiceActions from './invoice.action';
import { Invoice } from '../models/store.types';
import { StoreService } from '../services/storeService/store.service';
import { ApiService } from '../services/api-service/api.service';


@Injectable()
export class InvoiceEffects {

  constructor(
    private actions: Actions,
    private storeService: ApiService,
  ) {}

  fetchInvoices$ = createEffect(() =>
    this.actions.pipe(
      ofType(InvoiceActions.fetchInvoices),
      mergeMap(() => {
        const localStorageInvoices = localStorage.getItem('invoices');

        if (localStorageInvoices) {
          const invoices: Invoice[] = JSON.parse(localStorageInvoices);
          return of(InvoiceActions.fetchInvoicesSuccess({ invoices }));
        } else {
          return this.storeService.fetchInvoices().pipe(
            tap((invoices: Invoice[]) => {
              localStorage.setItem('invoices', JSON.stringify(invoices));
            }),
            map((invoices: Invoice[]) =>
            {
              localStorage.setItem('invoices', JSON.stringify(invoices));
              return InvoiceActions.fetchInvoicesSuccess({ invoices })
            }
            ),
            catchError((error) =>
              of(InvoiceActions.fetchInvoicesFailure({ error }))
            )
          );
        }
      })
    )
  );

  // fetchInvoices$ = createEffect(() =>
  //   this.actions.pipe(
  //     ofType(InvoiceActions.fetchInvoices),
  //     mergeMap(() =>
  //       this.storeService.fetchInvoices().pipe(
  //         map((invoices: Invoice[]) =>  {
  //               console.log(invoices)
  //             return InvoiceActions.fetchInvoicesSuccess({ invoices })
  //         }
  //         ),
  //         catchError((error) =>
  //           of(InvoiceActions.fetchInvoicesFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );

//   addInvoice$ = createEffect(() =>
//     this.actions.pipe(
//       ofType(InvoiceActions.addInvoice),
//       mergeMap(({ invoice }) =>
//         this.storeService.addInvoice(invoice).pipe(  // Replace addInvoice with your API call
//           map(() => InvoiceActions.fetchInvoices()), // Re-fetch invoices after adding a new one
//           catchError((error) =>
//             of(InvoiceActions.fetchInvoicesFailure({ error }))
//           )
//         )
//       )
//     )
//   );

//   updateInvoice$ = createEffect(() =>
//     this.actions.pipe(
//       ofType(InvoiceActions.updateInvoice),
//       switchMap(({ update }) =>
//         this.storeService.updateInvoice(update.id, update.changes).pipe(  // Replace updateInvoice with your API call
//           map(() => InvoiceActions.fetchInvoices()), // Re-fetch invoices after updating
//           catchError((error) =>
//             of(InvoiceActions.fetchInvoicesFailure({ error }))
//           )
//         )
//       )
//     )
//   );
}

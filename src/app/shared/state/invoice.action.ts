import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Invoice } from '../models/store.types';

// Action to initiate fetching invoices from the API
export const fetchInvoices = createAction('[Invoice API] Fetch Invoices');

// Action for when fetching invoices is successful
export const fetchInvoicesSuccess = createAction(
  '[Invoice API] Fetch Invoices Success',
  props<{ invoices: Invoice[] }>()
);

// Action for when fetching invoices fails
export const fetchInvoicesFailure = createAction(
  '[Invoice API] Fetch Invoices Failure',
  props<{ error: any }>()
);

// Action to update an existing invoice in the store
export const updateInvoice = createAction(
  '[Invoice] Update Invoice',
  props<{ update: Update<Invoice> }>()
);

// Action to add a new invoice to the store
export const addInvoice = createAction(
  '[Invoice] Add Invoice',
  props<{ invoice: Invoice }>()
);

// Selected Invoice Actions
export const setSelectedInvoice = createAction(
  '[Invoice] Set Selected Invoice',
  props<{ invoiceId: string }>()
);

export const clearSelectedInvoice = createAction('[Invoice] Clear Selected Invoice');

// Theme Actions
export const setTheme = createAction(
  '[Theme] Set Theme',
  props<{ theme: string }>()
);

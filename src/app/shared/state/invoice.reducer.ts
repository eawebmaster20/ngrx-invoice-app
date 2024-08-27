import { createReducer, on } from '@ngrx/store';
import { invoiceAdapter, initialInvoiceState, InvoiceState } from './invoice.entity'
import * as InvoiceActions from './invoice.action';

export const invoiceReducer = createReducer(
  initialInvoiceState,
  on(InvoiceActions.fetchInvoicesSuccess, (state, { invoices }) =>
    invoiceAdapter.setAll(invoices, state)
  ),
  on(InvoiceActions.addInvoice, (state, { invoice }) =>
    invoiceAdapter.addOne(invoice, state)
  ),
  on(InvoiceActions.updateInvoice, (state, { update }) =>
    invoiceAdapter.updateOne(update, state)
  ),
  on(InvoiceActions.setSelectedInvoice, (state, { invoiceId }) => ({
    ...state,
    selectedInvoiceId: invoiceId,
  })),
  on(InvoiceActions.clearSelectedInvoice, (state) => ({
    ...state,
    selectedInvoiceId: null,
  })),
  on(InvoiceActions.setTheme, (state, { theme }) => ({
    ...state,
    theme,
  }))
);

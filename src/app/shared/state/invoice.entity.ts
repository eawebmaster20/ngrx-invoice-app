import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Invoice } from '../models/store.types';

export interface InvoiceState extends EntityState<Invoice> {
  selectedInvoiceId: string | null;
  theme: string;
}

export const invoiceAdapter: EntityAdapter<Invoice> = createEntityAdapter<Invoice>();

export const initialInvoiceState: InvoiceState = invoiceAdapter.getInitialState({
  selectedInvoiceId: null,
  theme: 'light', // Default theme
});

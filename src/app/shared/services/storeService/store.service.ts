import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Invoice } from '../../models/store.types';
import { InvoiceState } from '../../state/invoice.entity';
import { Store } from '@ngrx/store';
import * as InvoiceActions from '../../state/invoice.action';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private apiService:ApiService,
    private store: Store<InvoiceState>
  ) { }

  getInvoices(){
    // this.apiService.fetchInvoices().subscribe(
    //   (invoices) => {
    //     this.store.dispatch(InvoiceActions.fetchInvoicesSuccess({invoices}));
    //   },
    //   (error) => {
    //     this.store.dispatch(InvoiceActions.fetchInvoicesFailure(error));
    //     console.error(error)
    //   }
    // )
  }
  
  addInvoice(invoice: Invoice){
    
  }

  updateInvoice(id: string, changes: Partial<Invoice>) {
    
  }
}

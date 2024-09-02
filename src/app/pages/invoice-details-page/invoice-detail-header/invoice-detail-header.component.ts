import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Invoice } from '../../../shared/models/store.types';
import { deleteInvoice, updateInvoice } from '../../../shared/state/invoice.action';
import { InvoiceState } from '../../../shared/state/invoice.entity';
import { Update } from '@ngrx/entity';
import { StoreService } from '../../../shared/services/storeService/store.service';

@Component({
  selector: 'app-invoice-detail-header',
  standalone: true,
  imports: [],
  templateUrl: './invoice-detail-header.component.html',
  styleUrl: './invoice-detail-header.component.scss'
})
export class InvoiceDetailHeaderComponent {
  @Input() invoice!: Invoice;
  testData1 = {
    status: "pending"
  }
  constructor(
    private router: Router, 
    private storeService: StoreService,
    private store: Store<{invoices:InvoiceState}>
  ) {}

  deleteInvoice = (id: string) => {
    this.store.dispatch(deleteInvoice({ id }));
    this.router.navigate(['']);
  };

  
  markAsPaid = (id: string) => {
    const update: Update<Invoice> = {
          id:id,
          changes:{status: "paid"}
        };
    this.store.dispatch(updateInvoice({update}));
  };
  markAsPending = (id: string) => {
    const update: Update<Invoice> = {
          id:id,
          changes:{status: "pending"}
        };
    this.store.dispatch(updateInvoice({update}));
  };
  editInvoice(invoice: Invoice){
    this.storeService.setInvoiceData(invoice);
    this.storeService.editMode=true;
    this.router.navigate(['new']);
  }
}

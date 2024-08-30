import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectInvoiceById } from '../../shared/state/invoice.selectors';
import { Invoice } from '../../shared/models/store.types';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-invoice-details-page',
  standalone: true,
  imports: [MatButtonModule,],
  templateUrl: './invoice-details-page.component.html',
  styleUrl: './invoice-details-page.component.scss'
})
export class InvoiceDetailsPageComponent {
  selectedInvoice:Observable<any> = this.store.select(selectInvoiceById('RG0314'))
  constructor(private store:Store){
    this.selectedInvoice.subscribe(invoice =>console.log(invoice))
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectInvoiceById } from '../../shared/state/invoice.selectors';
import { Invoice } from '../../shared/models/store.types';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InvoiceDetailContentComponent } from './invoice-detail-content/invoice-detail-content.component';
import { InvoiceDetailHeaderComponent } from './invoice-detail-header/invoice-detail-header.component';

@Component({
  selector: 'app-invoice-details-page',
  standalone: true,
  imports: [
    MatButtonModule,
    AsyncPipe, 
    InvoiceDetailHeaderComponent, 
    InvoiceDetailContentComponent, 
    RouterLink
  ],
  templateUrl: './invoice-details-page.component.html',
  styleUrl: './invoice-details-page.component.scss'
})
export class InvoiceDetailsPageComponent {
  selectedInvoice:Observable<any> = this.store.select(selectInvoiceById(this.route.snapshot.paramMap.get('id')!))
  constructor(private route: ActivatedRoute, private store:Store){
    this.selectedInvoice.subscribe(invoice =>console.log(invoice))
  }
}

import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Invoice } from '../../../shared/models/store.types';

@Component({
  selector: 'app-invoice-detail-content',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './invoice-detail-content.component.html',
  styleUrl: './invoice-detail-content.component.scss'
})
export class InvoiceDetailContentComponent {
  @Input() invoice!: Invoice;
}

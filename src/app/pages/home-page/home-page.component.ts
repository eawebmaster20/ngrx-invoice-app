import { ChangeDetectorRef, Component, model } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvoiceState } from '../../shared/state/invoice.entity';
import { Invoice } from '../../shared/models/store.types';
import { selectAllInvoices, selectTheme } from '../../shared/state/invoice.selectors';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { fetchInvoices, setSelectedInvoice } from '../../shared/state/invoice.action';
import { filterOptions } from '../../shared/models/interfaces';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCheckboxModule,FormsModule, ButtonComponent, CommonModule,RouterLink,FilterPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  allStatus:filterOptions = {
    'paid':true,
    'pending':true,
    'draft':false
  }
  localInvoices:Invoice[]| null=[]
  invoices: Observable<Invoice[]> = this.store.select(selectAllInvoices);

  theme: Observable<any> = this.store.select(selectTheme);
  constructor(
    public store:Store<{invoices:InvoiceState}>, 
    private router:Router,
    private cdr:ChangeDetectorRef,
  ){
    // this.invoices.subscribe(items =>this.localInvoices = items);
    // this.theme.subscribe(items =>console.log(items));
    // this.store.dispatch(fetchInvoices())
  }



  buttonClick(event:any) {
    console.log('Button clicked in the parent component', event);
  }

onValueChange(status: keyof filterOptions) {//+
  this.allStatus = {//+
    ...this.allStatus,//+
    [status]: !this.allStatus[status]//+
  };
  this.cdr.detectChanges();//+
}//+

  goToDetail(invoiceId: string) {
    console.log('invoice number', invoiceId);
    this.store.dispatch(setSelectedInvoice({invoiceId: invoiceId}))
    this.router.navigate(['/details', invoiceId]);
  }
}

import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchInvoices } from '../../shared/state/invoice.action';
import { InvoiceState } from '../../shared/state/invoice.entity';
import { Invoice } from '../../shared/models/store.types';
import { selectAllInvoices, selectTheme } from '../../shared/state/invoice.selectors';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  providers:[FilterPipe],
  imports: [FormsModule, ButtonComponent, CommonModule,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  filterOptions = [
    "Draft","Pending","Paid"
  ];
  statusFilters = {
    paid: false,
    pending: false,
    draft: false,
  };
  localInvoices:Invoice[]=[]
  invoices: Observable<Invoice[]> = this.store.select(selectAllInvoices);
  theme: Observable<any> = this.store.select(selectTheme);
  constructor(private filterPipe: FilterPipe,public store:Store<{invoices:InvoiceState}>, private router:Router){
    this.invoices.subscribe(items =>this.localInvoices = items);
    // this.theme.subscribe(items =>console.log(items));
    this.store.dispatch(fetchInvoices())
  }



  buttonClick(event:any) {
    console.log('Button clicked in the parent component', event);
  }
  onValueChange() {
    console.log(this.statusFilters);
    return this.filterPipe.transform(this.localInvoices, this.statusFilters);
  }
  goToDetail(invoiceId: string) {
    console.log('Button clicked in the parent component', invoiceId);
    this.router.navigate(['/details'], { queryParams: { id: invoiceId } });
  }
}

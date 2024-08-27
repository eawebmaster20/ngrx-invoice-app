import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchInvoices } from '../../shared/state/invoice.action';
import { InvoiceState } from '../../shared/state/invoice.entity';
import { Invoice } from '../../shared/models/store.types';
import { selectAllInvoices, selectAllInvoicesArray, selectTheme } from '../../shared/state/invoice.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  filterOptions = [
    { value: 'option1', label: 'Option 1' , seleted:false},
    { value: 'option2', label: 'Option 2' , seleted:false},
    { value: 'option3', label: 'Option 3' , seleted:false},
  ];
  invoices: Observable<Invoice[]> = this.store.select(selectAllInvoices);
  theme: Observable<any> = this.store.select(selectTheme);
  constructor(public store:Store<{invoices:InvoiceState}>){
    // this.invoices.subscribe(items =>console.log(items));
    // this.theme.subscribe(items =>console.log(items));
    this.store.dispatch(fetchInvoices())
  }



  buttonClick(event:any) {
    console.log('Button clicked in the parent component', event);
  }
}

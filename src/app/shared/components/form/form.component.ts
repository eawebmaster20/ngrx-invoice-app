import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Invoice, Item } from '../../models/store.types';
import { InvoiceState } from '../../state/invoice.entity';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StoreService } from '../../services/storeService/store.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [
    MatButtonModule, 
    MatIconModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatDatepickerModule, 
    CustomDatePipe,
    RouterLink
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  textValue: string = '';

  testData:Invoice = {
    id: "ALLO NKOAA",
    createdAt: "2021-08-21",
    paymentDue: "2021-09-20",
    description: "Dump payment information",
    paymentTerms: 30,
    clientName: "Alex Grim",
    clientEmail: "alexgrim@mail.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom"
    },
    clientAddress: {
      street: "84 Church Way",
      city: "Bradford",
      postCode: "BD1 9PB",
      country: "United Kingdom"
    },
    items: [
      {
        name: "Banner Design",
        quantity: 1,
        price: 156.00,
        total: 156.00
      },
      {
        name: "Email Design",
        quantity: 2,
        price: 200.00,
        total: 400.00
      }
    ],
    total: 556.00
  }
  testData1 = {
    createdAt: "2021-08-21",
    paymentDue: "2021-09-20",
    description: "Dump payment information",
    paymentTerms: 30,
    clientName: "kofi mensah",
    clientEmail: "alexgrim@mail.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom"
    },
    clientAddress: {
      street: "84 Church Way",
      city: "Bradford",
      postCode: "BD1 9PB",
      country: "United Kingdom"
    },
    items: [
      {
        name: "Banner Design",
        quantity: 1,
        price: 156.00,
        total: 156.00
      },
      {
        name: "Email Design",
        quantity: 2,
        price: 200.00,
        total: 400.00
      }
    ],
    total: 556.00
  }
  constructor(public store:Store<{invoices:InvoiceState}>,public storeService: StoreService){
    this.store.select('invoices').subscribe(state => {
      console.log(state);
    })
    // setTimeout(() => {
    //   this.store.dispatch(addInvoice({invoice:this.testData}))
    // }, 2000);
    // setTimeout(() => {
    //   this.store.dispatch(deleteInvoice({id:"XM9141"}))
    // }, 4000);
    // setTimeout(() => {
    //   const update: Update<Invoice> = {
    //     id:"TY9141",
    //     changes:this.testData1
    //   };
    //   this.store.dispatch(updateInvoice({update}));
    // }, 8000);
    // setTimeout(() => {
    //   const update: Update<Invoice> = {
    //     id:"TY9141",
    //     changes:this.testData1
    //   };
    //   this.store.dispatch(setTheme({theme:"dark"}));
    // }, 12000);
    
  }

  onValueChange(event: any) {
    const newValue = event.target.value;
    console.log("this.value");
  }
  logDate(event:any) {
    console.log(event);
  }
  ngOnInit() {
    // if (this.storeService.items.length === 0) {
    //   this.storeService.addItemToItemList();
    // }
  }

}

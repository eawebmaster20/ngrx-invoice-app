import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { Store } from '@ngrx/store';
import { Invoice } from '../../models/store.types';
import { addInvoice, deleteInvoice, setTheme, updateInvoice } from '../../state/invoice.action';
import { InvoiceState } from '../../state/invoice.entity';
import { Update } from '@ngrx/entity';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent,InputComponent, MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  textValue: string = '';
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
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
  constructor(public store:Store<{invoices:InvoiceState}>){
    this.store.select('invoices').subscribe(state => {
      console.log(state);
    })
    setTimeout(() => {
      this.store.dispatch(addInvoice({invoice:this.testData}))
    }, 2000);
    setTimeout(() => {
      this.store.dispatch(deleteInvoice({id:"XM9141"}))
    }, 4000);
    setTimeout(() => {
      const update: Update<Invoice> = {
        id:"TY9141",
        changes:this.testData1
      };
      this.store.dispatch(updateInvoice({update}));
    }, 8000);
    setTimeout(() => {
      const update: Update<Invoice> = {
        id:"TY9141",
        changes:this.testData1
      };
      this.store.dispatch(setTheme({theme:"dark"}));
    }, 12000);
    
  }
  callAction(k: string) {
    console.log('Button clicked in the child component');
  }

  buttonClick(event:any) {
    console.log('Button clicked in the parent component', event);
  }
  logDate(event:any) {
    console.log(event);
  }
  logger(){
    console.log(this.textValue);
  }
}

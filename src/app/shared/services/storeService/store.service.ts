import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Invoice, Item } from '../../models/store.types';
import { InvoiceState } from '../../state/invoice.entity';
import { Store } from '@ngrx/store';
import * as InvoiceActions from '../../state/invoice.action';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { addInvoice } from '../../state/invoice.action';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  createdAt = new FormControl('', [Validators.required]);
  paymentDue = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  paymentTerms = new FormControl(1, [Validators.required, Validators.min(1)]);
  clientEmail = new FormControl('', [Validators.required, Validators.email]);
  clientName = new FormControl('', [Validators.required]);
  senderStreet = new FormControl('', [Validators.required]);
  senderCity = new FormControl('', [Validators.required]);
  senderPostCode = new FormControl('', [Validators.required]);
  senderCountry = new FormControl('', [Validators.required]);
  clientStreet = new FormControl('', [Validators.required]);
  clientCity = new FormControl('', [Validators.required]);
  clientPostCode = new FormControl('', [Validators.required]);
  clientCountry = new FormControl('', [Validators.required]);
  items = new FormControl(0, [Validators.required]);
  total = new FormControl(0, [Validators.required]);
  // addInvoiceForm: FormGroup;
  // addInvoiceForm = new FormGroup({
  //   createdAt: this.createdAt,
  //   paymentDue: this.paymentDue,
  //   description: this.description,
  //   paymentTerms: this.paymentTerms,
  //   clientEmail: this.clientEmail,
  //   clientName: this.clientName,
  //   senderStreet: this.senderStreet,
  //   senderCity: this.senderCity,
  //   senderPostCode: this.senderPostCode,
  //   senderCountry: this.senderCountry,
  //   clientStreet: this.clientStreet,
  //   clientCity: this.clientCity,
  //   clientPostCode: this.clientPostCode,
  //   clientCountry: this.clientCountry,
  //   items: this.items,
  //   total: this.total
  // });
  addInvoiceForm = new FormGroup({
    createdAt: new FormControl('', Validators.required),
    paymentDue: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    paymentTerms: new FormControl(1, [Validators.required, Validators.min(1)]),
    clientEmail: new FormControl('', [Validators.required, Validators.email]),
    clientName: new FormControl('', Validators.required),
    senderStreet: new FormControl('', Validators.required),
    senderCity: new FormControl('', Validators.required),
    senderPostCode: new FormControl('', Validators.required),
    senderCountry: new FormControl('', Validators.required),
    clientStreet: new FormControl('', Validators.required),
    clientCity: new FormControl('', Validators.required),
    clientPostCode: new FormControl('', Validators.required),
    clientCountry: new FormControl('', Validators.required),
    items: new FormControl(0, Validators.required),
    total: new FormControl(0, Validators.required),
  });
  constructor(
    private apiService:ApiService,
    private store: Store<InvoiceState>,
    private fb: FormBuilder
  ) { 
  }

  newInvoice: Invoice= {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 1,
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: ""
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: ""
    },
    items: [],
    total: 0
  }
  submitted = false;
  addItemToItemList(){
    let emptyItem:Item = {
      name: '',
      quantity: 0,
      price: 0,
      total: 0
    }
    this.newInvoice.items.push(emptyItem);
  }
  removeItemFromItemList(index:number){
    this.newInvoice.items.splice(index, 1);
  }
  setPaymentPlan(paymentPlan:number){
    this.newInvoice.paymentTerms = paymentPlan;
  }
  addNewInvoiceToStore(status:string){
    this.submitted = !this.submitted
    console.log(this.addInvoiceForm.valid)
    console.log(this.addInvoiceForm)
    // this.newInvoice.id = "NEWi185"
    // this.store.dispatch(addInvoice({invoice: this.newInvoice}))
  }
}

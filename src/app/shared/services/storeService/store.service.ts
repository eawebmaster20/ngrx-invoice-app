import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Invoice } from '../../models/store.types';
import { InvoiceState } from '../../state/invoice.entity';
import { Store } from '@ngrx/store';
import * as InvoiceActions from '../../state/invoice.action';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private apiService:ApiService,
    private store: Store<InvoiceState>,
    private fb: FormBuilder
  ) { }
  createdAt = new FormControl('', [Validators.required]);
  paymentDue = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  paymentTerms = new FormControl(1, [Validators.required, Validators.min(1)]);
  clientEmail = new FormControl('', [Validators.required, Validators.email]);
  clientName = new FormControl('', [Validators.required]);
  senderStreet=new FormControl( ['', Validators.required]);
  senderCity= new FormControl(['', Validators.required]);
  senderPostCode=new FormControl (['', Validators.required]);
  senderCountry= new FormControl(['', Validators.required]);
  clientStreet=new FormControl( ['', Validators.required]);
  clientCity= new FormControl(['', Validators.required]);
  clientPostCode=new FormControl (['', Validators.required]);
  clientCountry= new FormControl(['', Validators.required]);
  items = new FormControl(0, [Validators.required]);
  total = new FormControl(0, [Validators.required]);
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
  getInvoices(){
  }
  
  addInvoice(invoice: Invoice){
    
  }

  updateInvoice(id: string, changes: Partial<Invoice>) {
    
  }
}

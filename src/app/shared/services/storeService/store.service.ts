import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Invoice, Item } from '../../models/store.types';
import { InvoiceState } from '../../state/invoice.entity';
import { Store } from '@ngrx/store';
import * as InvoiceActions from '../../state/invoice.action';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { addInvoice } from '../../state/invoice.action';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  addInvoiceForm: FormGroup;
  constructor(
    private apiService:ApiService,
    private store: Store<InvoiceState>,
    private fb: FormBuilder,
    private router:Router
  ) { 
    this.addInvoiceForm = this.fb.group({
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
      items: this.fb.array([]),
      total: new FormControl(0, Validators.required),
    });
    
  }
  submitted = false;



  get addNewItemToList(): FormArray {
    return this.addInvoiceForm.get('items') as FormArray;
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [0, Validators.required],
      price: [0, Validators.required],
      total: [{value: 0, disabled: true}],
    });
  }
  addItemToItemList(){
    this.addNewItemToList.push(this.createItem());
  }
  removeItemFromItemList(index:number){
    this.addNewItemToList.removeAt(index);
  }
  formatDate(date: Date): string {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
  calculatePaymentDue(date: Date, paymentTerms: number): string {
    const dueDate = new Date(date);
    dueDate.setDate(dueDate.getDate() + paymentTerms);
    return this.formatDate(dueDate);
  }
  setPaymentPlan(paymentPlan:number){
    let createdAt = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
    this.addInvoiceForm.get('createdAt')?.setValue(createdAt);
    this.addInvoiceForm.get('paymentTerms')?.setValue(paymentPlan);
    this.addInvoiceForm.get('paymentDue')?.setValue(this.calculatePaymentDue(new Date(), paymentPlan))
    document.getElementById("paymentTerms")!.innerText = paymentPlan>1 ? `Net ${paymentPlan} Days`:`Net ${paymentPlan} Day`;
    
  }
  addNewInvoiceToStore(status:string){
    if (this.addInvoiceForm.valid) {
      this.submitted = !this.submitted
      this.addInvoiceForm.value.id = "NEWi185"
      this.store.dispatch(addInvoice({invoice: this.addInvoiceForm.value}))
      
      this.router.navigate([''])
      return;
    }
    console.log(this.addInvoiceForm)
  }
}

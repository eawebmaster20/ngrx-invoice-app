import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../../models/store.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchInvoices() {
    return this.http.get<Invoice[]>('assets/data.json');
  }
}

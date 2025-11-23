import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class Transaction {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createTransaction(transactionData: any) {
    const url = `${this.apiUrl}/transaction`;
    return this.http.post(url, transactionData);
  }
}

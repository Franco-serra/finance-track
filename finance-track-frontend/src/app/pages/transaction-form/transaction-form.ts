import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../../services/transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-form',
  imports: [
    FormsModule,
  ],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.css',
})
export class TransactionForm {

  description: string = '';
  amount: number = 0;
  type: string = 'expense'; // 
  category: string = '';
  
  isLoading: boolean = false;

  constructor(private transactionService: Transaction, private router: Router) {}

  onSubmit() {
    const transactionData = {
      description: this.description,
      amount: this.amount,
      type: this.type,
      category: this.category
    };
    this.transactionService.createTransaction(transactionData).subscribe({
      next: (response) => {
        console.log('Transaction saved successfully', response);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error saving transaction', error);
        this.isLoading = false;
      }
    });
    
  }
  resetForm() {
  this.description = '';
  this.amount = 0;
  this.type = 'expense';
  this.category = '';
}
onCancel() {
  this.router.navigate(['/dashboard']);
}
}

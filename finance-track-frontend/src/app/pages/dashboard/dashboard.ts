import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartModule } from 'primeng/chart';



@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    ChartModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Income',
          backgroundColor: '#4CAF50',
          data: [2000, 2500, 1800, 3000, 2200]
        },
        {
          label: 'Expenses', 
          backgroundColor: '#FF6347',
          data: [800, 1200, 1000, 1500, 900]
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

    recentTransactions = [
    { description: 'Food', amount: 50, type: 'expense', date: '2024-11-05' },
    { description: 'Salary', amount: 2000, type: 'income', date: '2024-11-01' },
    { description: 'Transport', amount: 30, type: 'expense', date: '2024-10-28' }
  ];

  constructor(private router: Router) { }

  navigateToTransactions() {
    this.router.navigate(['/transactions']);
  }
}

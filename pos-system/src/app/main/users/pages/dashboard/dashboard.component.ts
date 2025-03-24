import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Total Sales', value: '$30,780', icon: '💵' },
    { title: 'Orders', value: '612', icon: '🛍️' },
    { title: 'Customers', value: '320', icon: '👨‍👩‍👧' },
    { title: 'Stock Items', value: '200', icon: '📦' }
  ];

  recentTransactions = [
    { id: 'TXN12345', customer: 'John Doe', amount: '$120.00', date: '2025-03-24' },
    { id: 'TXN12346', customer: 'Jane Smith', amount: '$80.50', date: '2025-03-23' },
    { id: 'TXN12347', customer: 'Michael Brown', amount: '$150.75', date: '2025-03-22' },
  ];

  logout() {
    alert('Logging out...');
  }
}

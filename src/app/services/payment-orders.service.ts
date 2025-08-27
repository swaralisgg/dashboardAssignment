import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaymentOrder } from '../models/payment-order.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentOrdersService {
  private ordersSubject = new BehaviorSubject<PaymentOrder[]>([
    {
      id: 'ORD-001',
      processingDate: new Date('2025-08-01'),
      status: 'pending approval',
      amount: 500
    },
    {
        id: 'ORD-003',
        processingDate: new Date('2025-06-01'),
        status: 'pending approval',
        amount: 500
      },
    {
      id: 'ORD-002',
      processingDate: new Date('2025-08-03'),
      status: 'In Progress',
      amount: 1250
    },
    {
      id: 'ORD-003',
      processingDate: new Date('2025-08-05'),
      status: 'Scheduled',
      amount: 800
    },
    {
      id: 'ORD-004',
      processingDate: new Date('2025-08-06'),
      status: 'Drafts',
      amount: 300
    }
  ]);

  orders$ = this.ordersSubject.asObservable();

  constructor() {}

  /** Add a new order */
  addOrder(order: PaymentOrder) {
    const currentOrders = this.ordersSubject.value;
    this.ordersSubject.next([...currentOrders, order]);
  }

  /** Update order status */
  updateStatus(orderId: string, newStatus: PaymentOrder['status']) {
    const updated = this.ordersSubject.value.map(o =>
      o.id === orderId ? { ...o, status: newStatus } : o
    );
    this.ordersSubject.next(updated);
  }
}
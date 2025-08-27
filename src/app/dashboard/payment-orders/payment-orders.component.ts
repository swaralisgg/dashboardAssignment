import { Component, OnInit } from '@angular/core';
import { PaymentOrder } from 'src/app/models/payment-order.model';
import { PaymentOrdersService } from 'src/app/services/payment-orders.service';

// ✅ Define type alias above component
type OrderTab = 'all' | 'pending approval' | 'In Progress' | 'Scheduled' | 'Drafts';


@Component({
  selector: 'app-payment-orders',
  templateUrl: './payment-orders.component.html',
  styleUrls: ['./payment-orders.component.css']
})
export class PaymentOrdersComponent implements OnInit {
  allOrders: PaymentOrder[] = [];
  filteredOrders: PaymentOrder[] = [];
  selectedTab: OrderTab = 'all';

  constructor(private paymentOrdersService: PaymentOrdersService) {}

  ngOnInit(): void {
    this.paymentOrdersService.orders$.subscribe(orders => {
      this.allOrders = orders;
      this.applyFilter();
    });
  }

  filterOrders(tab: OrderTab) {
    this.selectedTab = tab;
    this.applyFilter();
  }

  private applyFilter() {
    if (this.selectedTab === 'all') {
      this.filteredOrders = this.allOrders;
    } else {
      this.filteredOrders = this.allOrders.filter(
        o => o.status === this.selectedTab
      );
    }
  }
}
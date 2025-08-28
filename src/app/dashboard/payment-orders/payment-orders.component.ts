import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PaymentOrder } from 'src/app/models/payment-order.model';
import { PaymentOrdersService } from 'src/app/services/payment-orders.service';

// ✅ Define type alias above component
type OrderTab = 'all' | 'pending approval' | 'In Progress' | 'Scheduled' | 'Drafts';


@Component({
  selector: 'app-payment-orders',
  templateUrl: './payment-orders.component.html',
  styleUrls: ['./payment-orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PaymentOrdersComponent implements OnInit {
  allOrders: PaymentOrder[] = [];
  filteredOrders: PaymentOrder[] = [];
  selectedTab: OrderTab = 'all';

  constructor(private paymentOrdersService: PaymentOrdersService, private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.paymentOrdersService.orders$.subscribe(orders => {
      this.allOrders = orders;
      this.applyFilter();
      this.cdr.markForCheck();
    });
  }

  filterOrders(tab: OrderTab) {
    this.selectedTab = tab;
    this.applyFilter();
    this.cdr.markForCheck(); 
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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';



import { AccountsListComponent } from './dashboard/accounts-list/accounts-list.component';
import { QuickPayTransferComponent } from './dashboard/quick-pay-transfer/quick-pay-transfer.component';
import { PaymentOrdersComponent } from './dashboard/payment-orders/payment-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
     DashboardComponent,
    
     AccountsListComponent,
     QuickPayTransferComponent,
     PaymentOrdersComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

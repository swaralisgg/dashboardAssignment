import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-pay-transfer',
  templateUrl: './quick-pay-transfer.component.html',
  styleUrls: ['./quick-pay-transfer.component.css']
})
export class QuickPayTransferComponent implements OnInit {

  quickPayForm!: FormGroup;
  submitted = false;  // 🔑 track if Pay Now clicked

  suppliers = [
    { id: '1', name: 'Supplier A' },
    { id: '2', name: 'Supplier B' },
    { id: '3', name: 'Supplier C' }
  ];

  paymentMethods = [
    { id: 'bank', name: 'Bank Transfer' },
    { id: 'card', name: 'Credit Card' },
    { id: 'wallet', name: 'Wallet' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quickPayForm = this.fb.group({
      supplier: ['', Validators.required],
      amount: [
        '',
        [Validators.required, Validators.min(1), Validators.max(1000000)]
      ],
      paymentMethod: ['', Validators.required],
      remittanceNotes: ['', [Validators.maxLength(200)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;                 // mark submit clicked
    if (this.quickPayForm.invalid) {
      this.quickPayForm.markAllAsTouched();// trigger errors everywhere
      return;
    }

    console.log('✅ Form submitted:', this.quickPayForm.value);
    alert('Payment successful!');
    this.quickPayForm.reset();
    this.submitted = false;                // reset after successful submit
  }

  onClear(): void {
    this.quickPayForm.reset();
    this.submitted = false;
  }
}


  // Mock data (replace with API later)


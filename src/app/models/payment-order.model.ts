export interface PaymentOrder {
    id: string;
    processingDate: Date;
    status: 'pending approval' | 'In Progress' | 'Scheduled' | 'Drafts';
    amount: number;
  }
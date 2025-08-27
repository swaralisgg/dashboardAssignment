import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { QuickPayTransferComponent } from './quick-pay-transfer.component';
import { By } from '@angular/platform-browser';

describe('QuickPayTransferComponent', () => {
  let component: QuickPayTransferComponent;
  let fixture: ComponentFixture<QuickPayTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [QuickPayTransferComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickPayTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with default empty values', () => {
    expect(component.quickPayForm).toBeDefined();
    expect(component.quickPayForm.value).toEqual({
      supplier: '',
      amount: null, // Angular sets null for number inputs by default
      paymentMethod: '',
      remittanceNotes: ''
    });
  });

  it('should mark all controls invalid initially', () => {
    expect(component.quickPayForm.valid).toBeFalsy();
    expect(component.quickPayForm.get('supplier')?.valid).toBeFalsy();
    expect(component.quickPayForm.get('amount')?.valid).toBeFalsy();
    expect(component.quickPayForm.get('paymentMethod')?.valid).toBeFalsy();
  });

  it('should show validation errors when Pay Now clicked with empty form', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.nativeElement.click();

    component.submitted = true;
    fixture.detectChanges(); // 👈 run CD after submitted set

    const supplierError = fixture.debugElement.query(By.css('.text-danger.small'));
    expect(supplierError.nativeElement.textContent).toContain('Supplier is required');
  });

  it('should validate amount correctly', () => {
    const amountControl = component.quickPayForm.get('amount');

    amountControl?.setValue(-10);
    expect(amountControl?.valid).toBeFalsy();
    expect(amountControl?.hasError('min')).toBeTruthy();

    amountControl?.setValue(1000000000);
    expect(amountControl?.hasError('max')).toBeTruthy();
  });

  it('should submit valid form', () => {
    const spy = jest.spyOn(component, 'onSubmit'); // spy before triggering submit

    component.quickPayForm.setValue({
      supplier: '1',
      amount: 100,
      paymentMethod: 'card',
      remittanceNotes: 'Test note'
    });

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', {});

    expect(spy).toHaveBeenCalled();
    expect(component.quickPayForm.valid).toBeTruthy();
  });
});

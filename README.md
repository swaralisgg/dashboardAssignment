# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

# Description
This displays a simple banking dashboard with a header,body and a footer. the body consists of some static data, one reactive quick pay form and an pay-prders table. This project has been made using Angular framework, HTML, CSS, TS, JS and Bootstrap to make it resposnive. Various Angular elements have been used in it for  certain functionalities. 

# Functionalities

Components :- 
1) Header
2) Footer 
3) Dashboard

Child components of dashboard :- 
4)accounts-list
5)quick-pay-transfer
6)payment-orders

Services :- 
1)account-service.service.ts
2)payment-orders.service.ts

Models :-
1)account.model.ts
2)payment-order.model.ts

The dashboard consists of an account lists card where the bank account name and the balance are rendered via the account-service and the account model. The getAccounts method in this service getAccounts() returns an Observable<Account[]> → meaning: "a stream of data that will emit arrays of Account objects over time." The corresponding component calls the service method you showed earlier and Stores the latest accounts in the component’s accounts property.

Next to it is the quickPay form. This is a Reactive form. The pay now button just submits the values and console logs them. It has the following validations :-
Supplier (formControlName="supplier")

Required (hasError('required'))

Error message shown if empty.





Amount (formControlName="amount")

Required (hasError('required'))

Minimum value (hasError('min') → must be > 0)

Maximum value (hasError('max') → cannot exceed allowed limit)




Payment Method (formControlName="paymentMethod")

Required (hasError('required'))

Error message shown if not selected.

Remittance Notes (formControlName="remittanceNotes")

Max length (hasError('maxlength') → cannot exceed 200 characters)




The pay orders table below has a functionality to change tabs and display orders as per different status categories. The data is provided in the payment-orders-service.ts file and the mock interface for it is created in the payment-order.model.ts file. 

That method returns an Observable<Account[]>, which is a stream of account arrays coming from accountsSubject.

## Change Detection Strategy 

On push change detection strategy has been used in the following 3 components :- 
Child components of dashboard :- 
4)accounts-list
5)quick-pay-transfer
6)payment-orders

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test:watch'

Test Cases have been written for these components :-

4)accounts-list
5)quick-pay-transfer

## Running the project on local server

Run `ng serve -o`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

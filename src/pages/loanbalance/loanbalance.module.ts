import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanbalancePage } from './loanbalance';

@NgModule({
  declarations: [
    LoanbalancePage,
  ],
  imports: [
    IonicPageModule.forChild(LoanbalancePage),
  ],
})
export class LoanbalancePageModule {}

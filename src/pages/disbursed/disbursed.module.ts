import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisbursedPage } from './disbursed';

@NgModule({
  declarations: [
    DisbursedPage,
  ],
  imports: [
    IonicPageModule.forChild(DisbursedPage),
  ],
})
export class DisbursedPageModule {}

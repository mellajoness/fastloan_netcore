import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FailurePage } from './failure';

@NgModule({
  declarations: [
    FailurePage,
  ],
  imports: [
    IonicPageModule.forChild(FailurePage),
  ],
})
export class FailurePageModule {}

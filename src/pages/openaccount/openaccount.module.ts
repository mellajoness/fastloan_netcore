import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenaccountPage } from './openaccount';

@NgModule({
  declarations: [
    OpenaccountPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenaccountPage),
  ],
})
export class OpenaccountPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountlistPage } from './accountlist';

@NgModule({
  declarations: [
    AccountlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountlistPage),
  ],
})
export class AccountlistPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalancePage } from './balance';
//import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BalancePage,
  ],
  imports: [
    IonicPageModule.forChild(BalancePage),
    //PipesModule
  ],
})
export class BalancePageModule {}

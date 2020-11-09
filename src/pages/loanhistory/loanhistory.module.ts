import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanhistoryPage } from './loanhistory';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LoanhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanhistoryPage),
    PipesModule,
    TranslateModule.forChild()
  ],
})
export class LoanhistoryPageModule {}

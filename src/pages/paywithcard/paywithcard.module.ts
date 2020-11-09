import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaywithcardPage } from './paywithcard';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PaywithcardPage,
  ],
  imports: [
    IonicPageModule.forChild(PaywithcardPage),
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class PaywithcardPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaysuccessPage } from './paysuccess';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PaysuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(PaysuccessPage),
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class PaysuccessPageModule {}

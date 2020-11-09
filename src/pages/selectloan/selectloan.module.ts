import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectloanPage } from './selectloan';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelectloanPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectloanPage),
    TranslateModule.forChild()
  ],
})
export class SelectloanPageModule {}

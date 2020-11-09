import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectloanPage } from './rejectloan';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RejectloanPage,
  ],
  imports: [
    IonicPageModule.forChild(RejectloanPage),
    TranslateModule.forChild()
  ],
})
export class RejectloanPageModule {}

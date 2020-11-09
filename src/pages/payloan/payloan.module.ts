import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayloanPage } from './payloan';

@NgModule({
  declarations: [
    PayloanPage,
  ],
  imports: [
    IonicPageModule.forChild(PayloanPage),
  ],
})
export class PayloanPageModule {}

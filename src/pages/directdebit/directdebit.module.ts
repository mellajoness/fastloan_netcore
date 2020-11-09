import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectdebitPage } from './directdebit';

@NgModule({
  declarations: [
    DirectdebitPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectdebitPage),
  ],
})
export class DirectdebitPageModule {}

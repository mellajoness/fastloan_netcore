import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewcardsPage } from './viewcards';

@NgModule({
  declarations: [
    ViewcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewcardsPage),
  ],
})
export class ViewcardsPageModule {}

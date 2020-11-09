import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddcardPage } from './addcard';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AddcardPage,
  ],
  imports: [
    IonicPageModule.forChild(AddcardPage),
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class AddcardPageModule {}

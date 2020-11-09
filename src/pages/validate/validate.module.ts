import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidatePage } from './validate';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ValidatePage,
  ],
  imports: [
    IonicPageModule.forChild(ValidatePage),
    TranslateModule.forChild()
  ],
})
export class ValidatePageModule {}

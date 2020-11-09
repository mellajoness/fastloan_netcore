import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmloanPage } from './confirmloan';
import { TranslateModule } from '@ngx-translate/core';
//import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ConfirmloanPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmloanPage),
    TranslateModule.forChild()
    //PipesModule
  ],
})
export class ConfirmloanPageModule {}

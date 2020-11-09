import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtendloanPage } from './extendloan';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ExtendloanPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtendloanPage),
    PipesModule,
    TranslateModule.forChild()
  ],
})
export class ExtendloanPageModule {}

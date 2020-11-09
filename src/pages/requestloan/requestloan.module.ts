import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestloanPage } from './requestloan';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RequestloanPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestloanPage),
    PipesModule,
    TranslateModule.forChild()
  ],
})
export class RequestloanPageModule {}

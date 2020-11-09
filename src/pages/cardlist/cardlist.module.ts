import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardlistPage } from './cardlist';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(CardlistPage),
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class CardlistPageModule {}

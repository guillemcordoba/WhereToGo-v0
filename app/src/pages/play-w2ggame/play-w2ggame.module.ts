import { PlayW2ggameComponent } from './play-w2ggame';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PlayW2ggameComponent
],
  imports: [
    IonicPageModule.forChild(PlayW2ggameComponent),
  ],
  exports: [
    PlayW2ggameComponent
  ]
})
export class PlayW2ggameModule {}
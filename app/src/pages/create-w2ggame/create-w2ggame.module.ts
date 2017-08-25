import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateW2GGamePage } from './create-w2ggame';
import { PlayW2ggame.component.tsComponent } from '.f:/Development/WhereToGo/app/src/pages/play-w2ggame.component.ts/play-w2ggame.component.ts.component';
import { Play.w2ggame.componentComponent } from '.f:/Development/WhereToGo/app/src/pages/play.w2ggame.component/play.w2ggame.component.component';

@NgModule({
  declarations: [
    CreateW2GGamePage,,
    PlayW2ggame.component.tsComponent,
    Play.w2ggame.componentComponent
],
  imports: [
    IonicPageModule.forChild(CreateW2GGamePage),
  ],
  exports: [
    CreateW2GGamePage
  ]
})
export class CreateW2GGamePageModule {}

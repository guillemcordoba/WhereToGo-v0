import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateW2GGamePage } from './create-w2ggame';

@NgModule({
  declarations: [
    CreateW2GGamePage
],
  imports: [
    IonicPageModule.forChild(CreateW2GGamePage),
  ],
  exports: [
    CreateW2GGamePage
  ]
})
export class CreateW2GGamePageModule {}

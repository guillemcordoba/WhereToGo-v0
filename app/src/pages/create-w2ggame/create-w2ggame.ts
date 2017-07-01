import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { W2GGame } from '../../shared/model/w2ggame.model';
/**
 * Generated class for the CreateW2GGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-w2ggame',
  templateUrl: 'create-w2ggame.html',
})
export class CreateW2GGamePage {

  w2ggame: W2GGame;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateW2GGamePage');
    
    this.w2ggame = {
      entryPoint: undefined,
      questions: []
    };
  }

}

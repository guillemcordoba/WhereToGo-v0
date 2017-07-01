import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

import { Observable } from 'rxjs/Observable';

import { W2GGame, Location } from '../../shared/model/w2ggame.model';
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

  currentLocation: Location;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.currentLocation = navParams.get('currentLocation');

    this.w2ggame = {
      entryPoint: this.currentLocation,
      questions: [
        {
          location: this.currentLocation,
          description: ""
        }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateW2GGamePage');
  }

}

import { Component, ViewChild } from '@angular/core';
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
  selectedLocation: Location;
  @ViewChild("questions")
  questionSet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.currentLocation = navParams.get('currentLocation');

    this.w2ggame = {
      name: "",
      entryPoint: null,
      label: "",
      questions: [
        {
          location: null,
          description: ""
        }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateW2GGamePage');
  }

  saveW2GGame(event, w2ggame) {

  }

  addQuestion() {
    this.w2ggame.questions.push({
      location: null,
      description: ""
    })
  }

  selectedMapPoint($event) {
    if (this.questionSet.isSelectingLocation()) {
      this.selectedLocation = {
        longitude: $event.coords.lng,
        latitude: $event.coords.lat
      };
    }
  }

  buttonPressed() {
    if (this.questionSet.isSelectingLocation()) {
      this.questionSet.saveLocation(this.selectedLocation);
      this.selectedLocation = null;
    } else {
      this.questionSet.toggleQuestionsHidden();
    }

  }

}

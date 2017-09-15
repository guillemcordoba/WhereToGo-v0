import { W2GState } from './../../shared/app.state';
import { Store } from '@ngrx/store';
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

  constructor(private store: Store<W2GState>, public navParams: NavParams) {

    this.currentLocation = navParams.get('currentLocation');

    this.store.select(s => s.creatingGame).subscribe((game: W2GGame) => {
      console.log("hurray in the create");
      console.log(game);
      this.w2ggame = game;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateW2GGamePage');
  }

  saveW2GGame(event, w2ggame) {
    this.store.dispatch({ type: 'SAVE_GAME', payload: { w2gGame: w2ggame } });
  }

  addQuestion() {
    this.store.dispatch({ type: 'CREATE_GAME_ADD_QUESTION', payload: {
        location: null,
        description: ""
      }
    });
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

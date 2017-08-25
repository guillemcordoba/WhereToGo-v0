import { W2GQuestion } from './../shared/model/w2ggame.model';
import { FireBaseService } from './../service/firebase.service';
import { PlayW2ggameComponent } from './../pages/play.w2ggame/play.w2ggame.component';
import { EffectsModule, Effect, Actions } from '@ngrx/effects';
import { NavController } from 'ionic-angular';
import { W2GState } from './../shared/app.state';
import { Store } from '@ngrx/store';
import { Action, NewQuestionReceived } from "../shared/actions";
import { Geolocation } from '@ionic-native/geolocation';

export class W2GEffects {
    
    constructor(private actions$: Actions, private store: Store<W2GState>, private navCtrl: NavController,
        private geolocation: Geolocation, private backend: FireBaseService) {}

    @Effect() updateCurrentPosition = this.geolocation.watchPosition().subscribe((data) => {
        if (data["code"] == null) {
            let nextQuestion: W2GQuestion =
                this.backend.getNextQuestionFromCurrentLocation(data.coords.latitude, data.coords.longitude);
            if (nextQuestion) {
                this.store.dispatch({type: 'NEW_QUESTION', payload: {w2gQuestion: nextQuestion}});
            }
        }    
    });

    @Effect() saveW2GGame = this.actions$.ofType('SAVE_GAME').subscribe(() => {
        this.navCtrl.pop();
    });

    @Effect() startW2GGame = this.navCtrl.push(PlayW2ggameComponent);

}

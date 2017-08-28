import { CreateW2GGamePage } from './../pages/create-w2ggame/create-w2ggame';
import { W2GQuestion, W2GGame, Location } from './../shared/model/w2ggame.model';
import { FireBaseService } from './../service/firebase.service';
import { EffectsModule, Effect, Actions } from '@ngrx/effects';
import { NavController } from 'ionic-angular';
import { W2GState } from './../shared/app.state';
import { Store } from '@ngrx/store';
import { Action, NewQuestionReceived, SaveGameAction, StartGameAction, CreateNewGame, UpdateCurrentLocationAction, CheckQuestionResolved } from "../shared/actions";
import { Geolocation } from '@ionic-native/geolocation';
import { PlayW2ggameComponent } from "../pages/play-w2ggame/play-w2ggame.component";

export class W2GEffects {
    
    constructor(private actions$: Actions, private store: Store<W2GState>, private navCtrl: NavController,
        private geolocation: Geolocation, private backend: FireBaseService) {}

    @Effect()
    createNewGame = this.actions$.ofType('CREATE_NEW_GAME').subscribe((newGameActions: CreateNewGame) => {
        this.navCtrl.push(CreateW2GGamePage, {
            currentLocation: newGameActions.payload.initialLocation
        });
    });
    
    @Effect() 
    updateCurrentPosition = this.geolocation.watchPosition().subscribe((data) => {
        let nextLocation: Location = {
            longitude: data.coords.longitude,
            latitude: data.coords.latitude
        }
        if (data["code"] != null) {            
            this.store.dispatch({type: 'UPDATE_LOCATION', payload: { currentLocation:  nextLocation } });
        }
    });

    @Effect()
    getNextQuestion = this.actions$.ofType('CHECK_QUESTION_RESOLVED').subscribe((checkQuestion: CheckQuestionResolved) =>
        this.backend.getNextQuestionFromCurrentLocation(checkQuestion.payload.currentGameName, checkQuestion.payload.currentQuestionNumber,
            checkQuestion.payload.location.latitude, checkQuestion.payload.location.longitude)
            .then((newQuestion: W2GQuestion) => {
                if (newQuestion) {
                    this.store.dispatch({type: 'NEW_QUESTION', payload: {w2gQuestion: newQuestion}});
                }
        }).catch(() => {}) 
    );

    @Effect()
    updateEntryPoints = this.backend.getAvailableEntryPoints().subscribe(
        (nextEntryPoints: Array<Location>) => {
            this.store.dispatch({ type: 'UPDATE_ENTRY_POINTS', payload: {
                entryPoints: nextEntryPoints
            }
        });
    });

    @Effect() 
    saveW2GGame = this.actions$.ofType('SAVE_GAME').subscribe((saveGameAction: SaveGameAction) => {
        this.backend.saveW2GGame(saveGameAction.payload.w2gGame).catch((error) => {
            console.log("error saving game");
        }).then(() => {
            this.navCtrl.pop();
        });
    });

    @Effect() 
    startW2GGame = this.actions$.ofType('START_GAME').subscribe((nextValue: StartGameAction) => {
        this.navCtrl.push(PlayW2ggameComponent, {
            initialGame: nextValue.payload.initialGame
        });
    });

}

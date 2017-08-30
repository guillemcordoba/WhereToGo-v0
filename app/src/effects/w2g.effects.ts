import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlayW2ggameComponent } from './../pages/play-w2ggame/play-w2ggame';
import { CreateW2GGamePage } from './../pages/create-w2ggame/create-w2ggame';
import { W2GQuestion, W2GGame, Location } from './../shared/model/w2ggame.model';
import { FireBaseService } from './../service/firebase.service';
import { EffectsModule, Effect, Actions } from '@ngrx/effects';
import { NavController } from 'ionic-angular';
import { W2GState } from './../shared/app.state';
import { Store } from '@ngrx/store';
import { Action, NewQuestionReceived, SaveGameAction, StartGameAction, CreateNewGame, UpdateCurrentLocationAction, CheckQuestionResolved } from "../shared/actions";
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operator/map';

@Injectable()
export class W2GEffects {
    
    constructor(private actions$: Actions, private store: Store<W2GState>, private navCtrl: NavController,
        private geolocation: Geolocation, private backend: FireBaseService) {}

    @Effect()
    createNewGame = this.actions$.ofType('CREATE_NEW_GAME').map((newGameActions: CreateNewGame) => {
        this.navCtrl.push(CreateW2GGamePage, {
            currentLocation: newGameActions.payload.initialLocation
        });
        return newGameActions;
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
    getNextQuestion = this.actions$.ofType('CHECK_QUESTION_RESOLVED')
        .switchMap((checkQuestion: CheckQuestionResolved) =>
            this.backend.getNextQuestionFromCurrentLocation(checkQuestion.payload.currentGameName, 
                checkQuestion.payload.currentQuestionNumber, checkQuestion.payload.location.latitude, 
                checkQuestion.payload.location.longitude)
                .map((newQuestion: W2GQuestion) => {
                    if (newQuestion) {
                        return ({type: 'NEW_QUESTION', payload: {w2gQuestion: newQuestion}});
                    }
                })
        );

    @Effect()
    updateEntryPoints = this.backend.getAvailableEntryPoints()
        .map((nextEntryPoints: Array<Location>) => {
            this.store.dispatch({ 
                type: 'UPDATE_ENTRY_POINTS',
                payload: {
                    entryPoints: nextEntryPoints
                }
            })
        });

    @Effect() 
    saveW2GGame = this.actions$.ofType('SAVE_GAME').switchMap((saveGameAction: SaveGameAction) => {
        return this.backend.saveW2GGame(saveGameAction.payload.w2gGame).catch((error) => {
            console.log("error saving game");
        }).then(() => {
            this.navCtrl.pop();
        });
    });

    @Effect() 
    startW2GGame = this.actions$.ofType('START_GAME').map((nextValue: StartGameAction) => {
        this.navCtrl.push(PlayW2ggameComponent, {
            initialGame: nextValue.payload.initialGame
        });
        return nextValue;
    });

}

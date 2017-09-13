import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlayW2ggameComponent } from './../pages/play-w2ggame/play-w2ggame';
import { CreateW2GGamePage } from './../pages/create-w2ggame/create-w2ggame';
import { W2GQuestion, W2GGame, Location } from './../shared/model/w2ggame.model';
import { FireBaseService } from './../service/firebase.service';
import { EffectsModule, Effect, Actions } from '@ngrx/effects';
import { NavController, App } from 'ionic-angular';
import { W2GState } from './../shared/app.state';
import { Store } from '@ngrx/store';
import { Action, NewQuestionReceived, SaveGameAction, StartGameAction, CreateNewGame, ReceivedLocation, CheckQuestionResolved } from "../shared/actions";
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class W2GEffects {
    
    constructor(private actions$: Actions, private store: Store<W2GState>, private app: App,
        private geolocation: Geolocation, private backend: FireBaseService) {}

    /*@Effect()
    createNewGame = this.actions$.ofType('CREATE_NEW_GAME')
        //.map((newGameAction: CreateNewGame) => newGameAction.payload.initialLocation)
        .do((location) => {
            this.app.getActiveNav().push(CreateW2GGamePage);
    });*/
    
    @Effect()
    updateLocation = this.actions$.ofType('GET_LOCATION').switchMap(() => 
        this.geolocation.watchPosition()
        .map((data) => {
            console.log("Received new location data");
            if (data["coords"] != null) {  
                console.log("got the new location");
                let nextLocation: Location = {
                    longitude: data.coords.longitude,
                    latitude: data.coords.latitude
                }
                return ({type: 'RECEIVED_LOCATION', payload: { currentLocation:  nextLocation } });
            }
            console.log("there was an error getting the location");
        })
    );
/*
    updateCurrentPosition = this.geolocation.watchPosition().map((data) => {
        console.log("Received new location data");
        if (data["coords"] != null) {  
            console.log("got the new location");
            let nextLocation: Location = {
                longitude: data.coords.longitude,
                latitude: data.coords.latitude
            }
            return ({type: 'UPDATE_LOCATION', payload: { currentLocation:  nextLocation } });
        }
    });*/
/*
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
 */

    @Effect()
    updateEntryPoints = this.actions$.ofType('GET_ENTRY_POINTS')
    .switchMap(() => 
        this.backend.getAvailableEntryPoints()
            .map((nextEntryPoints: Array<Location>) => 
                ({
                    type: 'RECEIVED_ENTRY_POINTS',
                    payload: {
                        entryPoints: nextEntryPoints
                    }
                })
            ).catch((error)=>{
                console.log("error getting the entry points");
                return Observable.of(error);
            })
    );

    /*@Effect() 
    saveW2GGame = this.actions$.ofType('SAVE_GAME').switchMap((saveGameAction: SaveGameAction) => {
        return this.backend.saveW2GGame(saveGameAction.payload.w2gGame).catch((error) => {
            console.log("error saving game");
        }).then(() => {
            this.app.getActiveNav().pop();
        });
    });

    @Effect() 
    startW2GGame = this.actions$.ofType('START_GAME').map((nextValue: StartGameAction) => {
        this.app.getActiveNav().push(PlayW2ggameComponent, {
            initialGame: nextValue.payload.initialGame
        });
        return Observable.of(nextValue);
    });
*/
}

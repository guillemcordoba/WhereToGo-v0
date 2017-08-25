import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';
import { State } from "@ngrx/store";

export type StartGameAction = { type: 'START_GAME', payload: { entryPoint: Location, firstQuestion: W2GQuestion } }
export type UpdateCurrentLocationAction = { type: 'UPDATE_LOCATION', payload: { currentLocation: Location } }
export type NewQuestionReceived = { type: 'NEW_QUESTION', payload: { w2gQuestion: W2GQuestion } }


export type Action = StartGameAction | UpdateCurrentLocationAction | NewQuestionReceived;
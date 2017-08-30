// Import state and model
import { W2GState } from './app.state';
import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

// Import actions
import { Action, UpdateEntryPoints, StartGameAction, UpdateCurrentLocationAction, NewQuestionReceived } from './actions';

export function reducer(state : W2GState, action : Action) : W2GState {
    console.log("New action dispatched to the store");
    console.log(state);
    console.log(action);    
    switch (action.type) {
        case 'START_GAME':
            return Object.assign({}, state, {
                currentGame: action.payload.initialGame
            });
        case 'NEW_QUESTION':
            return Object.assign({}, state, {
                currentGame: {
                    questions: [...state.currentGame.questions, action.payload.w2gQuestion]
                }
            });
        case 'UPDATE_LOCATION':
            return Object.assign({}, state, {
                currentLocation: action.payload.currentLocation
            });
        case 'UPDATE_ENTRY_POINTS':
            return Object.assign({}, state, {
                entryPoints: action.payload.entryPoints
            });
        default:
            return state;
        }
}
// Import state and model
import { W2GState } from './app.state';
import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

// Import actions
import { Action, ReceivedEntryPoints, StartGameAction, ReceivedLocation, NewQuestionReceived } from './actions';

export function reducer(state : W2GState, action : Action) : W2GState {
    console.log("New action dispatched to the store");
    console.log(state);
    console.log(action);    
    switch (action.type) {
        case 'CREATE_NEW_GAME':
            return Object.assign({}, state, {
                creatingGame: <W2GGame>{
                    name: 'NEW GAME',
                    entryPoint: null,
                    label: 'some label',
                    questions: []
                }
            });
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
        case 'RECEIVED_LOCATION':
            return Object.assign({}, state, {
                currentLocation: action.payload.currentLocation
            });
        case 'RECEIVED_ENTRY_POINTS':
            return Object.assign({}, state, {
                entryPoints: action.payload.entryPoints
            });
        default:
            return state;
        }
}
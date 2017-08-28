// Import state and model
import { W2GState } from './app.state';
import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

// Import actions
import { Action, StartGameAction, UpdateCurrentLocationAction, NewQuestionReceived } from './actions';

export function reducer(state : W2GState, action : Action) : W2GState {
    switch (action.type) {
        case 'START_GAME':
            state.currentGame = action.payload.initialGame;
            return state;
        case 'NEW_QUESTION':
            state.currentGame.questions.push(action.payload.w2gQuestion);
            return state;
        case 'UPDATE_LOCATION':
            state.currentLocation = action.payload.currentLocation;
            return state;
        case 'UPDATE_ENTRY_POINTS':
            state.entryPoints = action.payload.entryPoints;
            return state;
        default:
            return state;
        }
}
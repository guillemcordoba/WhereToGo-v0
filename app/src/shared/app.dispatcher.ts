// Import state and model
import { W2GState } from './app.state';
import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

// Import actions
import { Action, StartGameAction, UpdateCurrentLocationAction, NewQuestionReceived } from './actions';

export function reducer(state : W2GState, action : Action) : W2GState {
    switch (action.type) {
        case 'START_GAME':
            state.currentGame = {
                name: 'myGame',
                label: 'label',
                entryPoint: action.payload.entryPoint,
                questions: [ action.payload.firstQuestion ]
            };
            return state;
        case 'NEW_QUESTION':
            state.currentGame.questions.push(action.payload.w2gQuestion);
            return state;
        default:
            return state;
        }
}

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

// Import state and model
import { W2GState } from './app.state';
import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

// Import actions
import { Action, StartGameAction, UpdateCurrentLocationAction, CreateW2GGame } from './actions';

function dispatcher(initialState : W2GState, actions : Observable<Action>) : Observable<W2GState> {
    return actions.scan((state, action) => {
        if (action instanceof StartGameAction) {
            // HTTP CALL
            //state.currentGame = action.entryPoint;
            return state;
        } else if (action instanceof CreateW2GGame) {
            
        } else {

        }
    }, initialState);
}
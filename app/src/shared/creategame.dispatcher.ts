import { W2GState } from './app.state';
import { Action } from "./actions";


export function reducer(state : W2GState, action : Action) : W2GState {
    switch (action.type) {
        case 'CREATE_NEW_GAME':
            state.creatingGame = {
                name: "",
                entryPoint: null,
                label: "",
                questions: [
                  {
                    location: null,
                    description: ""
                  }
                ]
              };
            return state;
        case 'CREATE_GAME_ADD_QUESTION':
            state.creatingGame.questions.push(action.payload.question);
            return state;
        default:
            return state;
    }
}
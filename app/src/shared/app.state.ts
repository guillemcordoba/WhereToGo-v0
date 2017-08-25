import { W2GState } from './app.state';
import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

export interface W2GState {
    currentGame: W2GGame,
    entryPoints: Array<Location>
}

export const initialState: W2GState = {
    currentGame: null,
    entryPoints: []
}
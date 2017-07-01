import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';

export interface W2GState {
    currentGame: W2GGame,
    entryPoints: Array<Location>
}
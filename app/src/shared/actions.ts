import { W2GGame } from './model/w2ggame.model';

// Starts game identified by its entry point
export class StartGameAction {
    constructor(public entryPoint : Location) {}
}

// Updates the current location
export class UpdateCurrentLocationAction {
    constructor(public currentLocation : Location) {}
}

export class CreateW2GGame {
    constructor(public game : W2GGame) {}
}


export type Action = StartGameAction | UpdateCurrentLocationAction | CreateW2GGame;
// Starts game identified by its entry point
export class StartGameAction {
    constructor(public entryPoint : Location) {}
}

// Updates the current location
export class UpdateCurrentLocationAction {
    constructor(public currentLocation : Location) {}
}


export type Action = StartGameAction | UpdateCurrentLocationAction;
export interface W2GGame {
    entryPoint: Location,
    questions: Array<W2GQuestion>
}

export interface W2GQuestion {
    location: Location,
    description: string,
    possibleAnwsers?: Array<string>
}

export interface Location {
    longitude: number,
    latitude: number
}
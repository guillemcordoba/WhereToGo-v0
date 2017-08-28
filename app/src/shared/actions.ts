import { W2GGame, W2GQuestion, Location } from './model/w2ggame.model';
import { State } from "@ngrx/store";

export type StartGameAction = { type: 'START_GAME', payload: { initialGame: W2GGame } }
export type UpdateCurrentLocationAction = { type: 'UPDATE_LOCATION', payload: { currentLocation: Location } }
export type UpdateEntryPoints = { type: 'UPDATE_ENTRY_POINTS', payload: { entryPoints: Array<Location> } }
export type CheckQuestionResolved = { type: 'CHECK_QUESTION_RESOLVED', payload: { currentGameName: string, currentQuestionNumber: number, location: Location } }
export type NewQuestionReceived = { type: 'NEW_QUESTION', payload: { w2gQuestion: W2GQuestion } }
export type SaveGameAction = { type: 'SAVE_GAME', payload: { w2gGame: W2GGame } }

// Create game
export type CreateNewGame = { type: 'CREATE_NEW_GAME', payload: { initialLocation: Location } }
export type AddQuestion = { type: 'CREATE_GAME_ADD_QUESTION', payload: { question: W2GQuestion } }

export type CreateGameActions = CreateNewGame | AddQuestion;

export type Action = CreateGameActions | CheckQuestionResolved | UpdateEntryPoints | StartGameAction | UpdateCurrentLocationAction | NewQuestionReceived | SaveGameAction;
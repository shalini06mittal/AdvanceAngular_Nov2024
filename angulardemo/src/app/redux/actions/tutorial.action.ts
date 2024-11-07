
import {Action, createAction} from '@ngrx/store'
import { Tutorial } from '../model/tutorial.model'

// the name between brackets is a convention for where I am dispatching an action 
// and the rest of the string is the action name which indicates his intention
export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'



export class AddTutorialAction implements Action{
    readonly type: string = ADD_TUTORIAL;

    constructor(public payload:Tutorial){

    }
}
export class RemoveTutorialAction implements Action{
    readonly type: string = REMOVE_TUTORIAL;

    constructor(public payload:number){
        
    }
}

export type Actions = AddTutorialAction | RemoveTutorialAction

import { Tutorial } from '../model/tutorial.model'
import * as TutorialActions from '../actions/tutorial.action'

const initalState: Tutorial = {
    id:1,
    name:'First Tutorial',
    url:'http://someimage'
}

export function tutorialReducer(state:Tutorial[] =[initalState], 
    action:TutorialActions.Actions )
    {
        switch(action.type){
            case TutorialActions.ADD_TUTORIAL:
                return [...state, action.payload];
            case TutorialActions.REMOVE_TUTORIAL:
                console.log(state)
                state = state.filter(tut => tut.id !== action.payload) 
                console.log(state)
                return state
            default:
                return state
        }
     }
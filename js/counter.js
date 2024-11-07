// import { configureStore } from '@reduxjs/toolkit'
// const initialState = { value: 0 }
const INCR = 'INCREMENT';
const DECR = 'DECREMENT';
const INCRBYVALUE = 'INCRBYVALUE';
// function counterReducer(state = initialState, action) {
//   // Check to see if the reducer cares about this action
//   switch(action.type){
//     case  INCR:
//         // If so, make a copy of `state`
//         return {
//         ...state,
//         // and update the copy with the new value
//         value: state.value + action.data
//         }
//     case INCRBYVALUE:
//         // If so, make a copy of `state`
//         return {
//         ...state,
//         // and update the copy with the new value
//         value: state.value +action.payload
//         }
//     default:
//             // otherwise return the existing state unchanged
//             return state
//     }
// }

// const store = configureStore({
//     reducer: {counterReducer},
//   })
// // const store = createStore(counterReducer)
// console.log(store.getState())
// //store.subscribe(()=>{console.log(store.getState())})
// store.dispatch({type:'INCR',data:3})
// store.dispatch({type:'INCR',data:3})
// store.dispatch({type:'INCR',data:3})
// console.log(store.getState())
// store.dispatch({type:'DECR'})
// console.log(store.getState())




import { configureStore , createAction} from '@reduxjs/toolkit';
import reduxlogger from 'redux-logger'
const logger = reduxlogger.createLogger()

const initialState = { value: 0 }

// const increment = ()=>{
//     return {type: INCR}
// }

const increment = createAction(INCR);
console.log(increment())

const decrement = createAction(DECR)

// const incrementbyvalue = (value)=>{
//     return {type: INCRBYVALUE, payload:value }
// }
const incrementbyvalue = createAction(INCRBYVALUE)


function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  switch(action.type){
    case  INCR:
        // If so, make a copy of `state`
        return {
        ...state,
        // and update the copy with the new value
        value: state.value +1
        }
    case DECR:
        // If so, make a copy of `state`
        return {
        ...state,
        // and update the copy with the new value
        value: state.value - 1
        }
    case INCRBYVALUE:
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + action.payload
          }
    default:
            // otherwise return the existing state unchanged
            return state
    }
}

const logAndAdd = amount => {
    return (dispatch, getState) => {
      const stateBefore = getState()
      console.log('----------------')
      console.log(stateBefore)
      console.log(dispatch)
      setTimeout(() => {
        dispatch(increment(amount))
    }, 3000);
      
      const stateAfter = getState()
       console.log(stateAfter)
    }
  }
const store = configureStore({
    reducer: {counterReducer},middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })
// const store = createStore(counterReducer)
// console.log(store.getState())

// store.subscribe(()=>{console.log(store.getState())})
store.dispatch(increment())
// console.log(store.getState())
store.dispatch(decrement())
// console.log(store.getState())
store.dispatch(incrementbyvalue(5))
// console.log(store.getState())
// store.dispatch(logAndAdd(10))




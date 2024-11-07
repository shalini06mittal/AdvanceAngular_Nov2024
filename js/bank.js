
const redux = require("redux");
const createStore = redux.createStore;
const store = createStore(reducer);

// Actions Objects to withdraw and deposit money
const WITHDRAW = 'WITHDRAW_MONEY'
const DEPOSIT = 'DEPOSIT_MONEY'
  
  // Action Creator
  function withdrawMoney() {
    return {
      type: WITHDRAW,
      payload: 1000,
    };
  }
  function depositMoney() {
    return {
      type: DEPOSIT,
      payload: 1000,
    };
  }

  const initialState = {
    amount: 5000,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case WITHDRAW:
        return { ...state, amount: state.amount - action.payload };
      case DEPOSIT:
        return { ...state, amount: state.amount + action.payload };
      default:
        return state;
    }
  };



// access to State
console.log("Initial State", store.getState());

//register listeners via subscribe(listener)
const unsubscribe = store.subscribe(() =>
  console.log("Update State :", store.getState())
);

//state update via dispatch(action)
store.dispatch(withdrawMoney());

//handles unregistering of listeners by function returned by subscriber
unsubscribe();

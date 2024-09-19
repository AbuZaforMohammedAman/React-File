const redux = require('redux');

//console.log(redux);
// State
const initState = {
    num: 0
}

// Reducer
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1
        }
    }
    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.a
        }
    }
    if (action.type === 'DEC_NUM') {
        return {
            ...state,
            num: state.num - 1
        }
    }
    if (action.type === 'MUL') {
        return {
            ...state,
            num: state.num * 5
        }
    }
    return state;
}
// Store
const store = redux.createStore(rootReducer);

console.log(store.getState());
// Subscribe
store.subscribe(() => {
    console.log("Subscribe:", store.getState());
})

// Dispatching Action
store.dispatch({
    type: 'ADD_NUM',
    a: 34
})

store.dispatch({
    type: 'INC_NUM'
});

store.dispatch({
    type: 'DEC_NUM'
})

store.dispatch({
    type: 'MUL'
})



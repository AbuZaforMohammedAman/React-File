//const redux = require('redux');
//const reduxjs = require('@reduxjs');

const { configureStore } = require("@reduxjs/toolkit");

//import { configureStore } from "@reduxjs/toolkit";

// Initial state
const initState = {
    num: 0
};

// Reducer
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC_NUM':
            return {
                ...state,
                num: state.num + 1
            };
        case 'ADD_NUM':
            return {
                ...state,
                num: state.num + action.a
            };
        case 'DEC_NUM':
            return {
                ...state,
                num: state.num - 1
            };
        case 'MUL':
            return {
                ...state,
                num: state.num * 5
            };
        default:
            return state;
    }
};

// Store
const store = configureStore({
    reducer: rootReducer,
});

console.log("Initial State:", store.getState());

// Subscribe to state changes
store.subscribe(() => {
    console.log("State after dispatch:", store.getState());
});

// Dispatching Actions
store.dispatch({
    type: 'ADD_NUM',
    a: 34
});

store.dispatch({
    type: 'INC_NUM'
});

store.dispatch({
    type: 'DEC_NUM'
});

store.dispatch({
    type: 'MUL'
});

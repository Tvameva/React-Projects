import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { createStore } from 'redux';

const { createStore } = require('redux');

const initState = {
    age: 12
};

const myReducer = (state = initState, action) => {
    const newState = { ...state };

    if (action.type === 'Increment'){
        newState.age += 1;
    }
    return newState;
}

const store = createStore(myReducer);

store.dispatch({ type: 'Increment' });

console.log(store.getState());
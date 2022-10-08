import React, {useReducer, useState} from 'react';
import App from './App';

import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);



const defaultState = {
    cash: 0
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload};
        case 'REM_CASH':
            if (state.cash > 0) {
                return {...state, cash: state.cash - action.payload};
            }
            else{
                console.log(state.cash)
                return {...state, cash: state.cash}
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

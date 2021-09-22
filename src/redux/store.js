import {createStore , compose, applyMiddleware } from 'redux';
import rootReduces from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
     rootReduces,
     composeEnhancer(),
    )
    

export default store;
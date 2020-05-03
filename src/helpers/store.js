import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),

);
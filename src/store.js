import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";


export default () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
    return store;
}


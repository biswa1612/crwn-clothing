import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//it shows everything in console which can be used by others in application
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
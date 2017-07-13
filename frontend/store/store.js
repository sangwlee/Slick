import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root_reducer';
import  logger  from 'redux-logger';
import  thunk  from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger());
}

export const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares))
);

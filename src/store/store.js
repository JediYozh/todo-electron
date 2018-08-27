import { createStore, applyMiddleware } from 'redux';
import initialState from './state.json';
import reducer from '../reducers';
import logger from '../middewares/logger';

const store = createStore(reducer, initialState, applyMiddleware(logger));

export default store;

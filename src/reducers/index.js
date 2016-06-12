import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import environment from './environment';
import jokelists from './jokelists';

const reducers = {
  routing: routerReducer,
  environment,
  jokelists
};

module.exports = combineReducers(reducers);

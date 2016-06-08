import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import jokelists from './jokelists';

const reducers = {
  routing: routerReducer,
  jokelists
};

module.exports = combineReducers(reducers);

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('./styles/main.scss');

import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute, Redirect} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {Provider} from 'react-redux';
import configureStore from './stores';

import App from './containers/App';
import MobileJokes from './containers/MobileJokes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MobileJokes}/>
        <Route path="jokes/:category" component={MobileJokes}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

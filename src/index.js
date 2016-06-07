import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {Provider} from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

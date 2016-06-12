import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {initEnvironment} from '../actions/environment';

class App extends React.Component {
  componentDidMount() {
    const {actions:{initEnvironment}} = this.props;
    initEnvironment();
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    initEnvironment
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

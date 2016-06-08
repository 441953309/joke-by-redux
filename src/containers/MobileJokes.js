import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MobileJokeList from '../components/MobileJokeList'

import {fetchJokes} from '../actions/jokelists'

class MobileJokes extends Component {
  render() {
    const {jokelists, params, actions:{fetchJokes}} = this.props;
    const category = params.category ? params.category : 1;

    return (
      <div>
        <MobileJokeList
          category={category}
          jokelists={jokelists}
          fetchJokes={fetchJokes}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {jokelists} = state;
  return {
    jokelists
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    fetchJokes
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileJokes);

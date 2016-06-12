import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MobileJokeCate from '../components/MobileJokeCate'
import MobileJokeList from '../components/MobileJokeList'

import {fetchJokesIfNeed} from '../actions/jokelists'

class MobileJokes extends React.Component {
  render() {
    const {environment:{width, height}, jokelists, params, actions:{fetchJokesIfNeed}} = this.props;
    const category = params.category ? params.category : 1;

    return (
      <div className="mobile" style={{width: `${width}px`, height: `${height}px`}}>
        <MobileJokeCate
          category={category}/>
        <MobileJokeList
          category={category}
          jokelists={jokelists}
          fetchJokesIfNeed={fetchJokesIfNeed}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {environment, jokelists} = state;
  return {
    environment,
    jokelists
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    fetchJokesIfNeed
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileJokes);

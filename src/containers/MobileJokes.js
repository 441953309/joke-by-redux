import {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MobileJokes extends Component {
  render(){

  }
}


function mapStateToProps(state) {
  const {entities, environment, playlists} = state;
  const {isMobile, width, height} = environment;
  const {songs, users} = entities;
  const playingSongId = 1;
  const playlist = 'house';

  return {
    isMobile,
    width,
    height,
    playingSongId,
    playlists,
    playlist,
    songs,
    users,
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileJokes);

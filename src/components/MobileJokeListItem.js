import React, {Component, PropTypes} from 'react';

class MobileJokeListItem extends Component {
  render() {
    const {joke} = this.props;
    return (
      <div>
        <p>{joke.text}</p>
      </div>
    )
  }
}

export default MobileJokeListItem;

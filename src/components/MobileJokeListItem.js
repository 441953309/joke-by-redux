import React, {Component, PropTypes} from 'react';

class MobileJokeListItem extends Component {
  render() {
    const {joke} = this.props;
    return (
      <div className="mobile-joke-list-item">
        {joke.type == 1 ?
          <div>
            <p>{joke.text}</p>
          </div>
          :
          <div>
            <p>{joke.title}</p>
            <img src={joke.img}/>
          </div>
        }
      </div>
    )
  }
}

MobileJokeListItem.propTypes = {
  joke: PropTypes.object.isRequired
};

export default MobileJokeListItem;

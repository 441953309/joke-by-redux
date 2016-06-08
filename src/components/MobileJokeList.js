import React, {Component, PropTypes} from 'react';

import MobileInfiniteScroll from './MobileInfiniteScroll'
import MobileJokeListItem from './MobileJokeListItem'
import Spinner from './Spinner'

class MobileJokeList extends Component {

  componentWillMount() {
    const {category, jokelists, fetchJokes} = this.props;
    if (!(category in jokelists) || jokelists[category].items.length === 0) {
      fetchJokes(category, 1);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {category, jokelists, fetchJokes} = this.props;
    if (category !== nextProps.category) {
      if (!(nextProps.category in jokelists) || jokelists[nextProps.category].items.length === 0) {
        fetchJokes(category, 1);
      }
    }
  }

  renderJokeListItems() {
    const {category, jokelists} = this.props;
    if (!(category in jokelists)) {
      return null;
    }

    return jokelists[category].items.map((joke, i) => {
      return (
        <MobileJokeListItem
          key={`${joke.id}-${i}`}
          joke={joke}/>
      );
    })
  }

  renderSpinner() {
    const {category, jokelists} = this.props;
    if (!(category in jokelists) || jokelists[category].isFetching) {
      return <Spinner />;
    }

    return null;
  }

  render() {
    return (
      <MobileInfiniteScroll
        className=""
        scrollFunc={()=>{}}>
        {this.renderJokeListItems()}
        {this.renderSpinner()}
      </MobileInfiniteScroll>
    )
  }
}

export default MobileJokeList;

import React, {Component, PropTypes} from 'react';

import MobileInfiniteScroll from './MobileInfiniteScroll'
import MobileJokeListItem from './MobileJokeListItem'
import Spinner from './Spinner'

class MobileJokeList extends Component {

  componentDidMount() {
    const {category, jokelists, fetchJokesIfNeed} = this.props;
    if (!(category in jokelists) || jokelists[category].items.length === 0) {
      fetchJokesIfNeed(category);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {category, jokelists, fetchJokesIfNeed} = this.props;
    if (category !== nextProps.category) {
      if (!(nextProps.category in jokelists) || jokelists[nextProps.category].items.length === 0) {
        fetchJokesIfNeed(nextProps.category);
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
    const {category, jokelists, fetchJokesIfNeed} = this.props;
    if (!(category in jokelists)) {
      return <Spinner />;
    } else {
      if (jokelists[category].isFetching) {
        return <Spinner />;
      } else if (jokelists[category].isNetError) {
        return <div className="spinner-net-error" onClick={()=>{fetchJokesIfNeed(category,true)}}>网络异常,点击重试</div>
      }
    }

    return null;
  }

  render() {
    const {category, fetchJokesIfNeed} = this.props;

    return (
      <MobileInfiniteScroll
        className="mobile-jokes"
        scrollFunc={()=>{fetchJokesIfNeed(category)}}>
        {this.renderJokeListItems()}
        {this.renderSpinner()}
      </MobileInfiniteScroll>
    )
  }
}

MobileJokeList.propTypes = {
  category: PropTypes.number.isRequired,
  jokelists: PropTypes.object.isRequired,
  fetchJokesIfNeed: PropTypes.func.isRequired
};

export default MobileJokeList;

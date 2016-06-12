import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router'

class MobileJokeCate extends Component {
  render() {
    const {category} = this.props;
    return (
      <div className="mobile-joke-cate">
        <Link to="/jokes/1" className={category == 1? 'mobile-joke-cate-item active' : 'mobile-joke-cate-item'}>
          搞笑段子
        </Link>
        <Link to="/jokes/2" className={category == 2? 'mobile-joke-cate-item active' : 'mobile-joke-cate-item'}>
          搞笑图片
        </Link>
        <Link to="/jokes/3" className={category == 3? 'mobile-joke-cate-item active' : 'mobile-joke-cate-item'}>
          美女图片
        </Link>
      </div>
    )
  }
}

MobileJokeCate.propTypes = {
  category: PropTypes.number.isRequired
};

export default MobileJokeCate;

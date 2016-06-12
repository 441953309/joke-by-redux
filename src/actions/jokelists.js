import * as types from './const'
import {constructUrl} from '../utils/JokeUtils'

function fetchJokes(category, page) {
  return (dispatch) => {
    dispatch(requestJokes(category, page));
    fetch(constructUrl(category, page), {headers: {'apikey': '10b6c7b9c6b6381242dbd77dac35fdf2'}})
      .then(response => response.json())
      .then(json => {
        console.log(json)
        if(category == 1 || category == 2){
          dispatch(receiveJokes(category, page, json.showapi_res_body.contentlist, json.showapi_res_body.allPages));
        }else{
          const result = json.tngou.reduce((arr, item) => {
            item.img = 'http://tnfs.tngou.net/img'+item.img;
            arr.push(item);
            return arr;
          }, []);
          dispatch(receiveJokes(category, page, result, json.total));
        }
      })
      .catch(err => {
        dispatch(netError(category, page));
        throw err;
      })
  }
}

export function fetchJokesIfNeed(category, recoveryNetError = false) {
  return (dispatch, getState) => {
    const {jokelists} = getState();
    if (shouldFetchJokes(jokelists, category, recoveryNetError)) {
      let page = 1;
      const activeJokeList = jokelists[category];
      if (activeJokeList) {
        page = activeJokeList.page + 1
      }
      return dispatch(fetchJokes(category, page))
    }
  }
}

function requestJokes(category, page) {
  return {
    type: types.REQUEST_JOKES,
    category,
    page
  };
}

function receiveJokes(category, page, jokes, allPages) {
  return {
    type: types.RECEIVE_JOKES,
    category,
    page,
    jokes,
    allPages
  }
}

function netError(category, page) {
  return {
    type: types.NET_ERROR,
    category,
    page
  };
}

function shouldFetchJokes(jokelists, category, recoveryNetError = false) {
  const activeJokeList = jokelists[category];

  if (!activeJokeList) { //如果数据为空, 则需要获取
    return true;
  }

  if (!activeJokeList.isFetching) {//不是请求中, 则需要判读是否网络异常
    if (!activeJokeList.isNetError || recoveryNetError) { //如果不是网络异常, 或者是点击重试状态, 则需要获取
      return true;
    }
  }

  return false;
}

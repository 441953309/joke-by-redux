import * as types from './const'
import {constructUrl} from '../utils/JokeUtils'

export function fetchJokes(category, page) {
  return (dispatch) => {
    dispatch(requestJokes(category, page));
    fetch(constructUrl(category, page), {headers: {'apikey': '10b6c7b9c6b6381242dbd77dac35fdf2'}})
      .then(response => response.json())
      .then(json => {
        dispatch(receiveJokes(category, page, json.contentlist, json.allPages));
      })
      .catch(err => {
        throw err;
      })
  }
}

export function fetchJokesIfNeed(category) {
  return (dispatch, getState) => {
    const {jokelists} = getState();
    if (shouldFetchJokes(jokelists, category)) {
      return dispatch(fetchJokes(category, 1))
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

function shouldFetchJokes(jokelists, category) {
  const activeJokeList = jokelists[category];
  if (!activeJokeList) {
    return true;
  }
  return false;
}

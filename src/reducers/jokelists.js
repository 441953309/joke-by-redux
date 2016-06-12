import * as types from '../actions/const'

const initialJokeListState = {
  isFetching: false,
  isNetError: false,
  page: 0,
  items: [],
  allPages: 0
}

function jokelist(state = initialJokeListState, action) {
  switch (action.type) {
    case types.REQUEST_JOKES:
      return Object.assign({}, state, {
        isFetching: true,
        isNetError: false,
        page: action.page
      });
    case types.RECEIVE_JOKES:
      return Object.assign({}, state, {
        isFetching: false,
        isNetError: false,
        page: action.page,
        items: [...state.items, ...action.jokes],
        allPages: action.allPages
      });
    case types.NET_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isNetError: true,
        page: action.page - 1
      });
    default:
      return state;
  }
}

const initialState = {};

export default function jokelists(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_JOKES:
    case types.RECEIVE_JOKES:
    case types.NET_ERROR:
      return Object.assign({}, state, {[action.category]: jokelist(state[action.category], action)});
    default:
      return state;
  }
}

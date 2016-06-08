import * as types from '../actions/const'

const initialJokeListState = {
  isFetching: false,
  page: 0,
  items: [],
  allPages: 0
}

function jokelist(state = initialJokeListState, action) {
  switch (action.type) {
    case types.REQUEST_JOKES:
      return Object.assign({}, state, {
        isFetching: true,
        page: action.page,
      });
    case types.RECEIVE_JOKES:
      return Object.assign({}, state, {
        isFetching: false,
        page: action.page,
        items: [...state.items, ...action.jokes],
        allPages: action.allPages
      })
    default:
      return state;
  }
}

const initialState = {};

export default function jokelists(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_JOKES:
    case types.RECEIVE_JOKES:
      return Object.assign({}, state, {[action.category]: jokelist(state[action.category], action)});
    default:
      return state;
  }
}

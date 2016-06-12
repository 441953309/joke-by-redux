import * as types from './const'

function changeIsMobile(isMobile) {
  return {
    type: types.CHANGE_IS_MOBILE,
    isMobile
  };
}

function changeWidthAndHeight(width, height) {
  return {
    type: types.CHANGE_WIDTH_AND_HEIGHT,
    width,
    height
  };
}

export function initEnvironment() {
  return dispatch => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);

    dispatch(changeIsMobile(isMobile));
    dispatch(changeWidthAndHeight(window.innerWidth, window.innerHeight));

    window.onresize = () => {
      dispatch(changeWidthAndHeight(window.innerWidth, window.innerHeight));
    };
  };
}


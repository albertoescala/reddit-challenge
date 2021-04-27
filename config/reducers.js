import { FETCH_POSTS_SUCCESS, SET_CODE, SET_TOKEN } from './constants';

export const reducers = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, payload: action.payload };
    case SET_TOKEN:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.data.access_token,
          refresh_token: action.data.refresh_token,
          expires_in: action.data.expires_in,
        },
      };
    case SET_CODE:
      return {
        ...state,
        auth: {
          ...state.auth,
          code: action.data,
        },
      };
    default:
      return state;
  }
};

import {
  FETCH_POSTS_SUCCESS,
  SET_CODE,
  SET_TOKEN,
  FETCH_USER,
  SET_POST,
  SET_POST_VISITED,
  SET_POST_DISMISSED,
  SET_ALL_POSTS_DISMISSED,
} from './constants';
import { initialState } from './store';

const removeDuplicate = (array) => {
  return array.filter((value, index) => array.indexOf(value) === index);
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        hasMorePostsId: action.hasMorePostsId,
      };
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
    case FETCH_USER:
      return {
        ...state,
        user: action.data,
      };
    case SET_POST:
      return {
        ...state,
        postSelected: action.data,
      };
    case SET_POST_VISITED:
      return {
        ...state,
        postsVisited: removeDuplicate([...state.postsVisited, action.id]),
      };
    case SET_POST_DISMISSED:
      return {
        ...state,
        postsDismissed: removeDuplicate([...state.postsDismissed, action.id]),
      };
    case SET_ALL_POSTS_DISMISSED:
      return {
        ...state,
        postsDismissed: removeDuplicate([
          ...state.postsDismissed,
          ...action.ids,
        ]),
      };
    default:
      return state;
  }
};

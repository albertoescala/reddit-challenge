import {
  SET_TOKEN,
  SET_CODE,
  FETCH_USER,
  FETCH_POSTS_SUCCESS,
  SET_POST,
  SET_POST_VISITED,
  SET_POST_DISMISSED,
  SET_ALL_POSTS_DISMISSED,
  SET_IS_MENU_OPEN,
} from './constants';

export function setToken(data) {
  return {
    type: SET_TOKEN,
    data,
  };
}

export function setCode(data) {
  return {
    type: SET_CODE,
    data,
  };
}

export function setUser(data) {
  return {
    type: FETCH_USER,
    data,
  };
}

export function setPosts(data) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts: data.data.children,
    hasMorePostsId: data.data.after,
  };
}

export function setPost(data) {
  return {
    type: SET_POST,
    data,
  };
}

export function setPostVisited(id) {
  return {
    type: SET_POST_VISITED,
    id,
  };
}

export function setPostDismissed(id) {
  return {
    type: SET_POST_DISMISSED,
    id,
  };
}

export function setAllPostsDismissed(ids) {
  return {
    type: SET_ALL_POSTS_DISMISSED,
    ids,
  };
}

export function setIsMenuOpen(boolean) {
  return {
    type: SET_IS_MENU_OPEN,
    isMenuOpen: boolean,
  };
}

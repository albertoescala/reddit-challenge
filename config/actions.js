import {
  SET_TOKEN,
  SET_CODE,
  FETCH_USER,
  SET_POST,
  SET_POST_VISITED,
  SET_POST_DISMISSED,
  SET_ALL_POSTS_DISMISSED,
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

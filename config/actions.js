import { SET_TOKEN, SET_CODE, FETCH_USER, SET_POST } from './constants';

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

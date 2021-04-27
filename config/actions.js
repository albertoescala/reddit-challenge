import { SET_TOKEN, SET_CODE } from './constants';

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

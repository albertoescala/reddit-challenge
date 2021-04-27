import axios from 'axios';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from './constants';
import { setToken } from './actions';

export const fetchTopPosts = () => (dispatch) => {
  const redditUrl = "https://www.reddit.com/top.json";

  fetch(redditUrl)
    .then((res) => res.json())
    .then((data) => {
      return dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: data.data.children,
      });
    })
    .catch((err) => dispatch({ type: FETCH_POSTS_FAIL, payload: err }));
};

export const getToken = (code) => async (dispatch) => {
  return axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${code}&redirect_uri=http://www.localhost:3000`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${"cliente_id"}:${"secret_id"}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        params: {
          scope: "read save history",
        },
      }
    )
    .then((res) => dispatch(setToken(res.data)));
};

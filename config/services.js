import axios from 'axios';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from './constants';
import { setToken } from './actions';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const SECRET_ID = process.env.NEXT_PUBLIC_SECRET_ID;
const CALLBACK_URI = process.env.NEXT_PUBLIC_CALLBACK_URI;

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
      `grant_type=authorization_code&code=${code}&redirect_uri=${CALLBACK_URI}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${SECRET_ID}`
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

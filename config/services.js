import axios from 'axios';
import { store } from './store';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from './constants';
import { setUser, setToken } from './actions';

const REDDIT_API = process.env.NEXT_PUBLIC_REDDIT_API;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const SECRET_ID = process.env.NEXT_PUBLIC_SECRET_ID;
const CALLBACK_URI = process.env.NEXT_PUBLIC_CALLBACK_URI;

export const fetchTopPosts = (nextPageId) => (dispatch) => {
  const redditUrl = `https://www.reddit.com/top.json?limit=10${nextPageId ? `&after=${nextPageId}` : ''}`;

  fetch(redditUrl)
    .then((res) => res.json())
    .then((data) => {
      return dispatch({
        type: FETCH_POSTS_SUCCESS,
        posts: data.data.children,
        hasMorePostsId: data.data.after,
      });
    })
    .catch((err) => dispatch({ type: FETCH_POSTS_FAIL, posts: err }));
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

export const getUser = () => async (dispatch) => {
  const token = store.getState().auth.token;

  return await axios
    .get(
      `${REDDIT_API}/api/v1/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => dispatch(setUser(res.data)));
}
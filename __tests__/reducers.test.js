import { reducers } from '../config/reducers';
import {
  setPosts,
  setCode,
  setToken,
  setUser,
  setPost,
  setPostVisited,
  setPostDismissed,
  setAllPostsDismissed,
} from '../config/actions';
import products from './products.json';
import user from './user.json';

const CODE = 'code-example';

const TOKEN = {
  access_token: 'access_token',
  refresh_token: 'refresh_token',
  expires_in: 'expires_in',
};

describe('Posts Reducer', () => {
  it('Should return initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user: {},
      postSelected: {},
      postsVisited: [],
      postsDismissed: [],
    });
  });

  it('Should save the posts into the store', () => {
    expect(reducers(undefined, setPosts(products))).toEqual({
      posts: products.data.children,
      hasMorePostsId: products.data.after,
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user: {},
      postSelected: {},
      postsVisited: [],
      postsDismissed: [],
    });
  });

  it('Should save the user code', () => {
    expect(reducers(undefined, setCode(CODE))).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: CODE,
      },
      user: {},
      postSelected: {},
      postsVisited: [],
      postsDismissed: [],
    });
  });

  it('Should save the user token', () => {
    expect(reducers(undefined, setToken(TOKEN))).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: TOKEN.access_token,
        refresh_token: TOKEN.refresh_token,
        expires_in: TOKEN.expires_in,
        code: '',
      },
      user: {},
      postSelected: {},
      postsVisited: [],
      postsDismissed: [],
    });
  });

  it('Should save the user information', () => {
    expect(reducers(undefined, setUser(user))).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user,
      postSelected: {},
      postsVisited: [],
      postsDismissed: [],
    });
  });

  it('Should select a post', () => {
    expect(reducers(undefined, setPost(products.data.children[0]))).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user: {},
      postSelected: products.data.children[0],
      postsVisited: [],
      postsDismissed: [],
    });
  });

  it('Should have the posts visited', () => {
    expect(
      reducers(undefined, setPostVisited(products.data.children[0].id))
    ).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user: {},
      postSelected: {},
      postsVisited: [products.data.children[0].id],
      postsDismissed: [],
    });
  });

  it('Should have the posts dismissed', () => {
    expect(
      reducers(undefined, setPostDismissed(products.data.children[0].id))
    ).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user: {},
      postSelected: {},
      postsVisited: [],
      postsDismissed: [products.data.children[0].id],
    });
  });

  it('Should have the all posts dismissed', () => {
    expect(
      reducers(undefined, setAllPostsDismissed([products.data.children[0].id]))
    ).toEqual({
      posts: '',
      hasMorePostsId: '',
      auth: {
        token: '',
        refresh_token: '',
        code: '',
      },
      user: {},
      postSelected: {},
      postsVisited: [],
      postsDismissed: [products.data.children[0].id],
    });
  });
});

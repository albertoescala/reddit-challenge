import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from './reducers';

export let store;

export const initialState = {
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
  isPostLoading: false,
  isMenuOpen: false,
};

const middlewares = [thunk];

const persistConfig = {
  key: 'primary',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

function initStore(preloadedState = initialState) {
  return createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { counterReducer } from './reducers';

let store;

const initialState = {
  payload: '',
  auth: {
    token: '',
    refresh_token: '',
    code: '',
  }
};

const middlewares = [thunk];

function initStore(preloadedState = initialState) {
  return createStore(
    counterReducer,
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


  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

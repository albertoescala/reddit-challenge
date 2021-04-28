import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Global, css } from '@emotion/react'
import { useStore } from '../config/store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global
          styles={css`
            body {
              padding: 0;
              margin: 0;
              font-family: monospace;
            }
          `}
        />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

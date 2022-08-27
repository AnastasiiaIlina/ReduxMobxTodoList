import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/reduxStore';
import AppRedux from './AppRedux';
// import AppMobX from './AppMobX';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRedux />
    </Provider>
    {/*<AppMobX />*/}
  </React.StrictMode>
);

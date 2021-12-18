import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';

// REDUCERS =====================
import reducers from './reducers';

// STORE =======================
const myStore = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={ myStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);

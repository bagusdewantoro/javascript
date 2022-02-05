import React from 'react';
import ReactDOM from 'react-dom';

// =========== WITHOUT REDUX ========================
// import App from './01_GetAndPostWithoutRedux/App';
// import App from './02_EditWithoutRedux/App';
// import App from './03_DeleteWithoutRedux/App';
// import App from './04_LikeWithoutRedux/App';
import App from './05_AuthWithoutRedux/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// // =========== WITH REDUX ========================
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import App from './01_GetAndPostWithRedux/App';
// import './index.css';
//
// // REDUCERS =====================
// import reducers from './01_GetAndPostWithRedux/reducers';
//
// // STORE =======================
// const myStore = createStore(reducers, compose(applyMiddleware(thunk)));
//
// ReactDOM.render(
//   <Provider store={ myStore }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

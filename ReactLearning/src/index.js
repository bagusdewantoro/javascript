import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// change directory to change which react app
import './spaceX/index.css';
import App from './spaceX/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

// // ====== react 18 way
// const container = document.getElementById('root');
// // create a root:
// const root = ReactDOMClient.createRoot(container);
// // initial render: render an element to the root:
// root.render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>
// )
// // .. OR BELOW
ReactDOMClient
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

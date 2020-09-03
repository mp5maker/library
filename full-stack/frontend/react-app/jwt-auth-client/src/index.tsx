import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { getAccessToken } from './accessToken';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: 'include',
  request: (operation) => {
    const accessToken = getAccessToken()
    operation.setContext({
      ...(accessToken ? {
        headers: {
          authorization: accessToken ? `bearer ${accessToken}` : ''
        }
      } : {})
    })
  }
}) as any

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
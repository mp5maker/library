import React from 'react';
import { ApolloProvider } from 'react-apollo'

/* Apollo */
import { client } from './Client'

/* Components */
import BookList from './components/BookList'

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>
          Ninja's Reading List
        </h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;

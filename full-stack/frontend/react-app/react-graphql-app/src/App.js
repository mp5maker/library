import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo'

/* Apollo */
import { client } from './Client'

/* Components */
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'

function App() {
  const [ state, setState ] = useState({ selected: "" })

  const selected = ({ id })  => {
    setState({ selected: id })
  }

  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>
          Ninja's Reading List
        </h1>
        <BookList selected={selected} />
        <AddBook />
        <BookDetails selected={state.selected} />
      </div>
    </ApolloProvider>
  );
}

export default App;

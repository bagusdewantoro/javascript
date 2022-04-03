import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import CharactersList from './pages/CharactersList';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CharactersList />
    </ApolloProvider>
  )
}

export default App;

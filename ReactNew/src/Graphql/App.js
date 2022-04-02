import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import CharactersList from './pages/CharactersList';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <CharactersList />
    </ApolloProvider>
  )
}

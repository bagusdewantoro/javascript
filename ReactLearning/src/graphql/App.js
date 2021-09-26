import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(())
const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:6969/graphql'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});


const App = () => {
  return (
    <div className="App">
    </div>
  );
}

export default App;

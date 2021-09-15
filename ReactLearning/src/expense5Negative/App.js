import Header from './Header';
import Balance from './Balance';
import Summaries from './Summaries';
import History from './History';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
        <Balance />
        <Summaries />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
};

export default App;

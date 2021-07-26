import {Header1, Header2} from './components/Header';

const App = () => {
  return (
    <div className='container'>

      <Header1 />
      <Header1 title='Header 1: Fill in props'/>
      <Header2 />

    </div>
  )
};

export default App;

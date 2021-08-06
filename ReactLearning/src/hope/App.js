import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

const App = () => {
  const [nav] = useState([
    {
      "id": 1,
      "text": "Collections",
      "style": null,
    },
    {
      "id": 2,
      "text": "Awareness",
      "style": null,
    },
    {
      "id": 3,
      "text": "Contact",
      "style": null,
    },
    {
      "id": 4,
      "text": "Search",
      "style": "right",
    },
    {
      "id": 5,
      "text": "Cart",
      "style": "right",
    },
  ]);

  return (
    <div>
      <Header />
      <Nav nav={nav}/>
      <Main />
    </div>
  )
};

export default App;

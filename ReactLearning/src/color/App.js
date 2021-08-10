import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Palette = ({ palette, close }) => {
  return (
    <div className='pallete'>
      <button className='btn-generate'>
        Color {palette.number ? palette.number : 'default'}
      </button>
      <div
        className='color-box'
        style={{ backgroundColor: palette.color }}>
      </div>
      <p>{palette.color}</p>
      <FaTimes
        className='close'
        onClick={() => close(palette.id)}
      />
    </div>
  )
}

const Palettes = ({ generator, close }) => {
  return (
    <div>
      {generator.map((palette) => (
        <Palette
          key={palette.id}
          palette={palette}
          close={close}
        />
      ))}
    </div>
  )
};

const BtnGenerate = () => {
  return (
    <button className='btn'>Add</button>
  )
}

const Header = () => {
  return (
    <header>
      <h1>Random Color Generator</h1>
      <BtnGenerate />
    </header>
  )
};

const App = () => {
  const id = () => Math.floor(Math.random() * 1000 + 1);

  const [generator, setGenerator] = useState([
    {
      id: id(),
      number: 1,
      color: '#d39b23',
    },
    {
      id: id(),
      number: 2,
      color: '#cbcbbc',
    },
    {
      id: id(),
      number: 3,
      color: '#737373',
    },
    {id: id()},
    {id: id()},
  ]);

  const close = (num) => {
    console.log(num);
  }

  return (
    <div className='container'>
      <Header />
      <Palettes generator={generator} close={close}/>
    </div>
  )
};

export default App;

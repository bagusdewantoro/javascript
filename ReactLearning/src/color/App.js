import { useState } from 'react';
import { FiMinusCircle } from 'react-icons/fi';

const Palette = ({ palette, close }) => {
  const link = 'https://www.color-hex.com/color/';
  return (
    <div className='pallete'>
      <button className='btn-generate'>
        Color {palette.number ? palette.number : 'default'}
      </button>
      <div
        className='color-box'
        style={{ backgroundColor: '#' + palette.color }}
      >
      </div>
      <a href={palette.color ? link + palette.color : link + 'd7d7d7'}>
        {palette.color ? '#' + palette.color : '#d7d7d7'}
      </a>
      <FiMinusCircle
        size={22}
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

const BtnGenerate = ({ addButton }) => {
  return (
    <button
      className='btn'
      onClick={addButton}
    >
      Add Color
    </button>
  )
}

const Header = ({ addButton }) => {
  return (
    <header>
      <h1>Random Color Generator</h1>
      <BtnGenerate addButton={addButton}/>
    </header>
  )
};

const App = () => {
  const id = () => Math.floor(Math.random() * 1000 + 1);

  const [generator, setGenerator] = useState([]);

  const addButton = () => {
    let newItem = {
      id: id(),
      number: generator.length + 1,
    }
    setGenerator([...generator,
      newItem
    ]);
    console.log(newItem.number);
  }

  const close = (num) => {
    setGenerator(generator.filter((element) => element.id !== num));
    console.log(num);
  };

  return (
    <div className='container'>
      <Header addButton={addButton} />
      {generator.length > 0 ? (
        <Palettes
          generator={generator}
          close={close}
        />
      ) : (
        'Click the button to generate new pallete'
      )}
    </div>
  )
};

export default App;

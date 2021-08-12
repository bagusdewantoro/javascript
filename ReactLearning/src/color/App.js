import { useState } from 'react';
import { FiMinusCircle } from 'react-icons/fi';


const Generate = ({ palette, close }) => {
  let [color, setColor] = useState('d7d7d7');
  const link = 'https://www.color-hex.com/color/';
  const genColor = () => {
    let newColor;
    newColor = [...Array(6)].map(
      () => Math.floor(Math.random() * 16).toString(16)
    ).join('');
    console.log(newColor);
    setColor(color = newColor);
  };
  return (
    <div className='palette'>
      <button
        className='btn-generate'
        onClick={() => palette.color = genColor()}
      >
        Color {palette.number}
      </button>
      <div
        className='color-box'
        style={{ backgroundColor: '#' + color }}
      >
      </div>
      <a
        href={ link + color }
        target='_blank'
        rel="noreferrer"
      >
        #{color}
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
        <Generate
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

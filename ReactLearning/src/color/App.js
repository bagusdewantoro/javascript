import { useState } from 'react';

const Palette = ({ number, palette }) => {
  return (
    <div>
      <button>Color {number}</button>
      <div
        className='color-box'
        style={{ backgroundColor: palette }}>
      </div>
      <p>{palette}</p>
    </div>
  )
}

Palette.defaultProps = {
  number: 'default',
  palette: '#000000',
}

const Palettes = ({ generator }) => {
  return (
    <div>
      {generator.map((palette) => (
        <Palette
          key={palette.id}
          number={palette.number}
          palette={palette.color}
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
  const [generator] = useState([
    {
      id: 1,
      number: 1,
      color: '#d39b23',
    },
    {
      id: 2,
      number: 2,
      color: '#cbcbbc',
    },
    {
      id: 3,
      number: 3,
      color: '#737373',
    },
    {},
    {},
  ]);
  return (
    <div className='container'>
      <Header />
      <Palettes generator={generator}/>
    </div>
  )
};

export default App;

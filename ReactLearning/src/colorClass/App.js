import React, { Component } from 'react';
import { FiMinusCircle } from 'react-icons/fi';

class Generate extends Component {
  render() {
    const link = 'https://www.color-hex.com/color/';
    return (
      <div className='palette'>
        <button className='btn-generate'>
          {this.props.palette.numss} | click this
        </button>
        <div className='color-box' style={{ backgroundColor: '#' + this.props.palette.color }}></div>
        <a href={ link + this.props.palette.color } target='_blank' rel='noreferrer'>
          #{ this.props.palette.color }
        </a>
        <FiMinusCircle size={22} className='close' />
      </div>
    )
  }
}

const Palettes = (props) => {
  return (
    <div>
      {props.generator.map((palette) => (
        <Generate
          key={palette.id}
          palette={palette}
        />
      ))}
    </div>
  )
};

const BtnGenerate = () => {
  return (
    <button
      className='btn'
    >
      AddColor
    </button>
  )
};

const Header = () => {
  return (
    <header>
      <h1>Random Color Generator</h1>
      <BtnGenerate />
    </header>
  )
};

class App extends Component {
  state = {
    generator: [
      {
        id: '1',
        numss: '1',
        color: 'c4c4c4',
      },
      {
        id: '2',
        numss: '2',
        color: 'fff333',
      },
    ]
  }
  render() {
    return (
      <div className='container'>
        <Header />
        <Palettes generator={this.state.generator} />
      </div>
    )
  }
}

export default App;

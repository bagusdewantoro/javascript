import React, { Component } from 'react';
import { FiMinusCircle } from 'react-icons/fi';

class Generate extends Component {
  state = {
    color: 'd7d7d7'
  }
  genColor = () => {
    let newColor;
    newColor = [...Array(6)].map(
      () => Math.floor(Math.random() * 16).toString(16)
    ).join('');
    console.log(newColor);
    this.setState({
      color: newColor,
    });
  }
  render() {
    const link = 'https://www.color-hex.com/color/';
    return (
      <div className='palette'>
        <button
          className='btn-generate'
          onClick={() => this.genColor()}
        >
          {this.props.palette.numss} | click this
        </button>
        <div className='color-box' style={{ backgroundColor: '#' + this.state.color }}></div>
        <a href={ link + this.state.color } target='_blank' rel='noreferrer'>
          #{ this.state.color }
        </a>
        <FiMinusCircle
          size={22}
          className='close'
          onClick = {() => this.props.close(this.props.palette.id)}
        />
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
          close={props.close}
        />
      ))}
    </div>
  )
};

const BtnGenerate = (props) => {
  return (
    <button
      className='btn'
      onClick={props.addButton}
    >
      AddColor
    </button>
  )
};

const Header = (props) => {
  return (
    <header>
      <h1>Random Color Generator</h1>
      <BtnGenerate addButton={props.addButton} />
    </header>
  )
};

class App extends Component {
  id = () => Math.floor(Math.random() * 1000 + 1);

  state = {
    generator: [],
    buttonNumber: 1,
  };

  addButton = () => {
    const newItem = {
      id: this.id(),
      numss: this.state.buttonNumber,
    };
    this.setState({
      generator: [...this.state.generator, newItem],
    })
    this.setState({
      buttonNumber : this.state.buttonNumber + 1
    })
    console.log(`buttonNumber: ${this.state.buttonNumber}`);
  }

  close = (num) => {
    this.setState({
      generator: this.state.generator.filter((element) => element.id !== num)
    })
    console.log(`close id: ${num}`);
  };

  render() {
    return (
      <div className='container'>
        <Header addButton={this.addButton}/>
        <Palettes
          generator={this.state.generator}
          close={this.close}
        />
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';

class Color extends Component {
  state = {
    number: Math.floor(Math.random() * 4000 )
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      number: Math.floor(Math.random() * 4000 )
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#f4f3a2' }}>
        It is {this.state.number}.
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Color />
    </div>
  );
}

export default App;

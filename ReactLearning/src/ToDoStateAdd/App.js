import React, {Component} from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
};

const TableBody = (props) => {
  return (
    <tbody>
      {props.characterData.map((row, index) => (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      ))}
    </tbody>
  )
};

const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
      />
    </table>
  )
};

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  };
  state = this.initialState;
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={this.state.job}
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    )
  }
}

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
    ]
  };
  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  };
  render() {
    return (
      <div className='container'>
        <Table
          characterData={this.state.characters}
        />
        <Form
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App;

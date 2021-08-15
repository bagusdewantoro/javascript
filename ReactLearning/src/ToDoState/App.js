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
          <td>
            <button onClick={() => props.removeCharacter(index)}>
              Delete
            </button>
          </td>
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
        removeCharacter={props.removeCharacter}
      />
    </table>
  )
};

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
  }
  removeCharacter = (index) => {
    this.setState({
      characters: this.state.characters.filter((character, i) => {
        return i !== index
      })
    })
  }
  render() {
    return (
      <div className='container'>
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    )
  }
}

export default App;

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
    props.characterData.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    ))
  )
};

const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData} />
    </table>
  )
};

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
    ]
    return (
      <div className='container'>
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App;

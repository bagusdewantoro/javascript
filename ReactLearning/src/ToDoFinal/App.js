import React, {Component} from 'react';

// ============================================================================
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

// ============================================================================
const TableBody = (props) => {
  const rows = props.tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>
};

// ============================================================================
const Table = (props) => {
  const tableData = props.tableData;
  const removeCharacter = props.removeCharacter;
  // 2 rows of snippet above is equal with:
  // const {tableData, removeCharacter} = props;
  return (
    <table>
      <TableHeader />
      <TableBody tableData={tableData} removeCharacter={removeCharacter} />
    </table>
  );
};

// ============================================================================
class Form extends Component {
  initialState = {
    name: '',
    job: '',
  };
  state = this.initialState;

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, job} = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
};

// ============================================================================
class App extends Component {
  state = {
    members: [],
  };

  removeCharacter = (index) => {
    const {members} = this.state
    this.setState({
      members: members.filter((member, i) => {
        return i !== index
      }),
    });
  }

  handleSubmit = (member) => {
    this.setState({members: [...this.state.members, member]});
  }

  render() {
    const {members} = this.state;
    return (
      <div className="container">
        <Table tableData={members} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
};

export default App;

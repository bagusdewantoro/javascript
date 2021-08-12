import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    //destructuring:
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {' '}
          {title}
        </p>
      </div>
    );
  }
}
// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

//===================================
class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}
// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

//===================================
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Works',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;

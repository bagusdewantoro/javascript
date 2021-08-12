import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgrount: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
          />
          {' '}
          {this.props.todo.title}
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
        completed: true
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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

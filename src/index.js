import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const Todo = (props) => {
  return (
    <div>
      {props.description}
    </div>
  )
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.props.clear();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.clear}>clear</button>
        {this.props.todos.map((todo) => <Todo description={todo.description} />)}
      </div>
    )
  }
}

const reducer = (state = [{description: 'buy eggs'}, { description: 'eat hotpot' }], action) => {
  switch (action.type) {
    case 'clear':
      return []
    default:
      return state
  }
}

const store = createStore(reducer);

const TodoContainer = connect(
  (state) => ({
    todos: state
  }),
  {
    clear: () => {
      return {
        type: 'clear'
      }
    }
  }
)(TodoApp);

render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app')
);

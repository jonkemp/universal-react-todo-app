import React from 'react';
import { render } from 'react-dom';
import TodoForm from './components/todoForm';

const TodoApp = React.createClass({
  render() {
    return (
      <div>
        <h3>TODO List</h3>
        <TodoForm />
      </div>
    );
  }
});

render(
  <TodoApp />,
  document.getElementById('app')
);

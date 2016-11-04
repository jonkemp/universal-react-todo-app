import React from 'react';
import TodoList from './todoList';

export default React.createClass({
  getInitialState() {
    return {items: [], text: ''};
  },
  
  onChange(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([this.state.text]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  },

  render() {
    return <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <TodoList items={this.state.items} />
      </div>;
  }
});

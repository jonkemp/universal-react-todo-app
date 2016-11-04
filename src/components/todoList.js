import React from 'react';

export default React.createClass({
  render() {
    const createItem = (itemText, index) => {
      return <li key={index + itemText}>{itemText}</li>;
    };
    
    return <ol>{this.props.items.map(createItem)}</ol>;
  }
});

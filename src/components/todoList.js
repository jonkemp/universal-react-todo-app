import React from 'react';

export default function(props) {
  const createItem = (itemText, index) => {
    return <li key={index + itemText}>{itemText}</li>;
  };

  return <ol>{props.items.map(createItem)}</ol>;
}

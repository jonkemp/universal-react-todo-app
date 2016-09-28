export default function(store) {
  let todos = [];

  // convert string data into an array
  // else return an empty array
  if (store && typeof store === 'string') {
    todos = store.split(',');
  }

  return todos;
}

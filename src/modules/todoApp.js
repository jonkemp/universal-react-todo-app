export default function(el, collection) {
  return {
    render() {
      el.innerHTML = '';

      collection.forEach(function (item) {
        const li = document.createElement('li');
        const text = document.createTextNode(item);
        li.appendChild(text);
        el.appendChild(li);
      });

      return collection;
    },

    addTodo(todo) {
      collection.push(todo);

      return collection;
    }
  };
}

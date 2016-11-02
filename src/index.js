import getDataFromStore from './modules/store';
import pubsub from './modules/pubsub';
import todoApp from './modules/todoApp';

window.onload = () => {
  // repopulate todos from localStorage on page load
  const todosStore = localStorage.getItem('todos');

  const todoCollection = getDataFromStore(todosStore);

  const todos = document.getElementById('todos');

  const todoForm = document.getElementById('todo-form');

  const app = todoApp(todos, todoCollection);

  pubsub.subscribe('updateList', function () {
    app.render();
  });

  todoForm.addEventListener('submit', function (event) {
    const input = todoForm.elements['update'].value;

    const updatedCollection = app.addTodo(input);

    // save to localStorage
    localStorage.setItem('todos', updatedCollection);

    pubsub.publish('updateList', '');

    todoForm.elements['update'].value = '';

    event.preventDefault();
  }, false );

  app.render();
};

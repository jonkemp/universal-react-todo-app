import assert from 'assert';
import getDataFromStore from '../src/modules/store';
import pubsub from '../src/modules/pubsub';
import todoApp from '../src/modules/todoApp';

describe('getDataFromStore', function() {
  it('should convert string data into an array', function() {
    const todosStore = 'One,Two,Three';
    const todoCollection = getDataFromStore(todosStore);

    assert.deepEqual(todoCollection, ['One', 'Two', 'Three']);
  });

  it('should return an empty array if data is undefined', function() {
    const todoCollection = getDataFromStore();

    assert.deepEqual(todoCollection, []);
  });

  it('should return an empty array if data is not a string', function() {
    const todoCollection = getDataFromStore({});

    assert.deepEqual(todoCollection, []);
  });
});

describe('pubsub', function() {
  it('should subscribe to an event', function() {
    let a = 0;

    pubsub.subscribe('test1', function () {
      a++;
    });

    pubsub.publish('test1');

    assert.equal(a, 1);
  });

  it('should unsubscribe from an event', function() {
    let a = 0;

    pubsub.subscribe('test2', function () {
      a++;
    });

    pubsub.publish('test2');

    pubsub.unsubscribe('1');

    pubsub.publish('test2');

    assert.equal(a, 1);
  });
});

describe('todoApp', function() {
  it('should add data to a collection', function() {
    const app = todoApp({}, ['One', 'Two']);

    const todoCollection = app.addTodo('Three');

    assert.deepEqual(todoCollection, ['One', 'Two', 'Three']);
  });
});

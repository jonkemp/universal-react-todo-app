/* eslint-disable */

import assert from 'assert';

describe('React.js Universal Todo App', function() {
  it('should have the right page data', function() {
    browser.url('/');

    assert.equal(browser.getTitle(), 'React.js Universal Todo App');
    assert.equal(browser.isVisible('h3'), true);
    assert.equal(browser.getText('h3'), 'TODO List');
  });

  it('should create a todo', function() {
    browser
      .url('/')
      .localStorage('DELETE', 'todos')
      .setValue('#update', 'test')
      .submitForm('#todo-form');

    assert.equal(browser.getText('#todos li'), 'test');
  });
});

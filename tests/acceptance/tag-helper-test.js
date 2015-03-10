import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'dummy/tests/helpers/start-app';

var application, container, indexController, indexView;

module('HTMLBars Tags - Tag helper', {
  beforeEach: function() {
    application = startApp();
    container = application.__container__;
    indexController = container.lookup('controller:index');
    indexView = container.lookup('view:index');

    console.log(container);
  },

  afterEach: function() {
    Ember.run(application, 'reset');
  }
});

test('Loading the index route', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index',
      'The app should navigate to the index route');
  });
});

test('Rendering the tag helper', function(assert) {
  visit('/');

  andThen(function() {
    var tag = inspect('tag_element');
    var testTagClass = indexView.get('testTagClass');

    assertPresence(assert, 'tag_element');

    assert.ok(tag.hasClass('header'),
      'tag element should be rendered with the static class');

    assert.ok(tag.hasClass(testTagClass),
      'tag element should be rendered with the test class bound from the view');
  });
});

test('Rendering the tag helper content', function(assert) {
  visit('/');

  andThen(function() {

    assertPresence(assert, 'tag_content');

    assert.equal(
      inspect('view_constructor').text().trim(),
      indexView.get('constructor').toString(),
      'Context\'s view constructor should be the index view\'s constructor'
    );

    assert.equal(
      inspect('controller_constructor').text().trim(),
      indexController.get('constructor').toString(),
      'Context\'s controllers constructor should be the index controller\'s constructor'
    );

    assert.equal(
      inspect('view_property').text().trim(),
      indexView.get('testProperty'),
      'Context\'s view property should be equal to the property on the index view'
    );

  });
});

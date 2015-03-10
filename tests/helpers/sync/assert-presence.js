import Ember from 'ember';

export default Ember.Test.registerHelper('assertPresence',
  function (app, assert, name, shouldBePresent) {
    var element = inspect(name, false);

    assert.ok(
      element,
      'Element with data-test="' + name + '" should be present'
    );
  }
);

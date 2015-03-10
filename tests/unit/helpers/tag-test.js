import Ember from 'ember';
import { tag } from 'ember-htmlbars-tags/helpers/tag';
import { module, test } from 'qunit';

module('HTMLBars Tags - Helper tag');

test('Tag is present', function(assert) {
  var type = Ember.typeOf(tag);

  assert.equal(type, 'function',
    'exported helperFunction should be a function');

});

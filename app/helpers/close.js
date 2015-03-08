import defaultFor from 'ember-htmlbars-tags/utils/default-for';
import Ember from 'ember';
import tags from '../utils/tags';

export function close(params, hash) {
  var name = params.camelize();
  var properties = tags[name];
  var string = '</';

  Ember.assert(
    'No tag found with the name ' + name,
    properties
  );

  string += properties.tagName + '>';

  return string;
}

export default Ember.Handlebars.makeBoundHelper(close);

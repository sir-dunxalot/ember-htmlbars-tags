import defaultFor from 'ember-htmlbars-tags/utils/default-for';
import Ember from 'ember';
import ENV from '../config/environment';
import tags from '../utils/tags';

export function close(params, hash) {
  var configOptions = defaultFor(ENV.HTMLBarsTags, {});
  var name = params.camelize();
  var properties = tags[name];
  var string = '</';

  Ember.assert(
    'No tag found with the name ' + name,
    properties
  );

  string += properties.tagName + '>';

  if (configOptions.debug) {
    return string;
  } else {
    return Ember.Handlebars.SafeString(string);
  }
}

export default new Ember.Handlebars.makeBoundHelper(close);

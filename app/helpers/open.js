import defaultFor from 'ember-htmlbars-tags/utils/default-for';
import Ember from 'ember';
import tags from '../utils/tags';

export function open(params, hash) {
  var name = params.camelize();
  var properties = tags[name];
  var string = '<';
  var tagOptions = {};
  var attributeBindings, classNameBindings, classNames;

  hash = hash.hash;

  Ember.assert(
    'No tag found with the name ' + name,
    properties
  );

  /* Move the properties the the tagOptions object */

  for (var property in properties) {
    tagOptions[property] = properties[property];
  }

  /* Merge in the bindings on the helper in the template */

  for (var property in hash) {
    var hashProperties = hash[property].split(' ');

    if (!tagOptions[property]) {
      tagOptions[property] = hashProperties;
    } else {
      tagOptions[property] = tagOptions[property].concat(hashProperties);
    }
  }

  string += properties.tagName;

  attributeBindings = tagOptions.attributeBindings;
  classNameBindings = tagOptions.classNameBindings;
  classNames = tagOptions.classNames;

  if (classNameBindings) {
    classNameBindings.forEach(function(binding) {
      var bindingParts = binding.split(':');
      var pushClass = tagOptions.classNames.push;

      if (hash[bindingParts[0]]) {
        if (bindingParts.length > 1) {
          pushClass(bindingParts[1].dasherize());
        } else {
          pushClass(bindingParts[0].dasherize());
        }
      } else if (bindingParts.length > 2) {
        pushClass(bindingParts[2].dasherize());
      }
    });
  }

  if (attributeBindings) {
    attributeBindings.forEach(function(binding) {
      var value = hash[binding];

      if (value) {
        string += ' ' + binding + '=' + value;
      }
    });
  }

  if (classNames) {
    string += ' class="';

    classNames.forEach(function(className) {
      string += ' ' + className;
    });

    string += '"';
  }

  string += '>';

  return string;
}

export default Ember.Handlebars.makeBoundHelper(open);

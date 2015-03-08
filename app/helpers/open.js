import defaultFor from 'ember-htmlbars-tags/utils/default-for';
import Ember from 'ember';
import ENV from '../config/environment';
import tags from '../utils/tags';

export function open(params, hash) {
  var defaultAttributeBindings = ['class', 'role', 'style'];
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

  if (properties.customOpenString) {
    return properties.customOpenString(params, hash.hash);
  }

  /* Move the properties the the tagOptions object */

  for (var property in properties) {
    tagOptions[property] = properties[property];
  }

  /* Merge in the bindings on the helper in the template */

  [
    'attributeBindings',
    'classNameBindings',
    'classNames'
  ].forEach(function(property) {
    var value = hash[property];
    var hashProperties;

    if (value) {
      hashProperties = hash[property].split(' ');

      if (!tagOptions[property]) {
        tagOptions[property] = hashProperties;
      } else {
        tagOptions[property] = tagOptions[property].concat(hashProperties);
      }
    }
  });

  string += properties.tagName;

  attributeBindings = tagOptions.attributeBindings;
  classNameBindings = tagOptions.classNameBindings;
  classNames = tagOptions.classNames;

  if (ENV.htmlbarsTags) {
    defaultAttributeBindings = defaultFor(
      ENV.htmlbarsTags.defaultAttributeBindings,
      defaultAttributeBindings
    );
  }

  attributeBindings = attributeBindings.concat(defaultAttributeBindings);

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

  console.log(attributeBindings);

  if (attributeBindings) {
    attributeBindings.forEach(function(binding) {
      var value = hash[binding];

      if (value) {
        string += ' ' + binding + '="' + value + '"';
      }
    });
  }

  if (classNames.length) {
    string += ' class="';

    classNames.forEach(function(className) {
      string += className + ' ';
    });

    string += '"';
  }

  string += '>';

  return string;
}

export default Ember.Handlebars.makeBoundHelper(open);

// import Initializer from 'ember-htmlbars-tags/initializers/register-tags-helpers';

// export default Initializer;

import Ember from 'ember';
import close from '../helpers/close';
import open from '../helpers/open';

export function initialize(/* container, app */) {
  Ember.Handlebars.registerHelper('close', close);
  Ember.Handlebars.registerHelper('open', open);
}

export default {
  name: 'register-tags-helpers',
  initialize: initialize
};

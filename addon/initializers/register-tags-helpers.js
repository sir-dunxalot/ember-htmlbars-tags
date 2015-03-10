import Ember from 'ember';
import tag from '../helpers/tag';

export function initialize(/* container, app */) {
  Ember.Handlebars.registerHelper('tag', tag);
}

export default {
  name: 'register-tags-helpers',
  initialize: initialize
};

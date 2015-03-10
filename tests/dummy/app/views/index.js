import Ember from 'ember';

export default Ember.View.extend({
  testProperty: 'Shiver me tEmbers!',
  testTagClass: 'tag',

  actions: {
    actionOnView: function() {
      this.testAction();
    }
  },

  testAction: function() {
    window.alert('The action fired on the view!');
  }

});

import Ember from 'ember';

export default Ember.View.extend({
  hello: 'ok',

  actions: {
    someTest: function() {
      console.log('farts');
    }
  }
});

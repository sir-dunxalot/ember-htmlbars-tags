import Ember from 'ember';

var getModule = Ember.__loader.require;

// var renderView = getModule('ember-htmlbars/system/render-view');

// var renderView = getModule('ember-htmlbars/system/render-view');

var TagView = Ember._MetamorphView.extend({
  // init: function() {
  //   this._super.apply(this, arguments);

  //   var _this = this;

  //   this.conditionStream.subscribe(this._wrapAsScheduled(function() {
  //     Ember.run.scheduleOnce('render', _this, 'rerenderIfNeeded');
  //   }));
  // },

  // normalizedValue: function() {
  //   return this.conditionStream.value();
  // },

  // render: function(buffer) {
  //   var result = this.conditionStream.value();
  //   this._lastNormalizedValue = result;

  //   renderView(this, buffer, this.mainTemplate);
  // }
});

export default {
  isHTMLBars: true,
  helperFunction: function(params, hash, options, env) {
    return appendConditional(this, params, hash, options, env);
  }
}

function appendConditional(view, params, hash, options, env) {
  if (options.isBlock) {
    return appendBlockConditional(view, params, hash, options, env);
  } else {
    Ember.assert('tag should be block form');
  }
}

function appendBlockConditional(view, params, hash, options, env) {
  // var parentView =

  // var condition = shouldDisplay(params[0]);

  view.appendChild(TagView, {
    _morph: options.morph,
    _context: Ember.get(view, 'context'),
    template: options.template,
    helperName: options.helperName || 'some-tag'
  });
}

// export default Ember.HTMLBars._registerHelper('some-tag', someTag);

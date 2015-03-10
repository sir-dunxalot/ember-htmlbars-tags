import Ember from 'ember';

var TagVirtualView = Ember._MetamorphView.extend();

function wrapTemplate(view, params, hash, options, env) {
  var name = params[0];

  view.appendChild(TagVirtualView, {
    helperName: options.helperName || 'tag',
    layoutName: 'tags/' + name,
    template: options.template,
    _context: Ember.get(view, 'context'),
    _morph: options.morph
  });
}

export default {
  isHTMLBars: true,
  helperFunction: function(params, hash, options, env) {
    return wrapTemplate(this, params, hash, options, env);
  }
}

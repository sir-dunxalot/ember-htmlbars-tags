import Ember from 'ember';

var TagVirtualView = Ember._MetamorphView.extend();

function wrapTemplate(view, params, hash, options, env) {
  var name = params[0];
  var layoutName = 'tags/' + name;

  Ember.assert(
    'No tag layout found at the path templates/' + layoutName + '.hbs',
    view.container.has('template:' + layoutName)
  );

  view.appendChild(TagVirtualView, {
    helperName: options.helperName || 'tag',
    layoutName: layoutName,
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

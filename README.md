# Ember HTMLBars Tags [![Build Status](https://travis-ci.org/sir-dunxalot/ember-htmlbars-tags.svg?branch=master)](https://travis-ci.org/sir-dunxalot/ember-htmlbars-tags)

Ember HTMLBars Tags (`ember-htmlbars-tags`) is an Ember addon that improves the maintainability of your commonly used HTML fragments without adding unnecessary view scope to your templates.

## Example

```hbs
{{!-- templates/tags/page-header.hbs --}}

<header class="header" role="banner">
  {{yield}}
</header>
```

```hbs
{{!-- templates/index.hbs --}}

{{#tag 'page-header'}}
  {{!--References the index view--}}
  <h1>{{view.title}}</h1>
{{/tag}}
```

In this example the `<h1>` element is wrapper in the `<header>` element but the template context remains the same.


## Installation

```shell
ember install:addon ember-htmlbars-tags
```

## Usage

The Ember HTMLBars API consists of a single helper, `{{tag}}`. The tag helper accepts a single parameter, `name`, which is the name of the layout to wrap the content in.

So, to wrap some content of a route's template in predefined HTML without adding scope, you can do:

```hbs
{{!--templates/posts.hbs--}}

{{#tag 'grid'}}
  {{!--Bindings work as if the tag wasn't there--}}
  {{view.someProperty}}

  {{some-component}}
  {{some-component}}

  {{!--Sends action to posts view--}}
  <button {{action 'next' target='view'}}>Click</button>
{{/tag}}
```

The `name` passed to `{{tag}}` must correspond to a layout in the `template/tags` directory. For example, `{{#tag 'grid'}}` will look for a layout at `templates/tags/grid.hbs`:

```hbs
{{!--templates/tags/grid.hbs--}}

<ul class="grid">
  {{yield}}
</ul>
```

Note, you must add `{{yield}}` to each tag layout.

This will result in the following HTML rendered in the browser:

```html
<ul class="grid">
  valueOfPostsViewProperty

  <div class="some_component"></div>
  <div class="some_component"></div>

  <button data-ember-action="316">Click</button>
</ul>
```

It's that simple! Property bindings, actions, etc, will work as if the `{{tag}}` helper was just plain ol' HTML in your template.

The `{{tag}}` helper can also be used in inline form - it's equivalent to calling a partial in the `templates/tags` directory.

## Questions and Issues

If you have any questions or issues please [open an issue](https://github.com/sir-dunxalot/ember-htmlbars-tags/issues/new).

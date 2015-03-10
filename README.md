# Ember HTMLBars Tags

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

The Ember HTMLBars API consists of a single helper, `{{tag}}`. The tag helper should be used in block form and accepts a single parameter, `name`, which is the name of the layout to wrap the content in:

```hbs
{{#tag 'grid'}}
  {{some-component}}
  {{some-component}}
{{/tag}}
```

The `name` passed to `{{tag}}` must correspond to a layout in the `template/tags` directory. For example, `{{#tag 'grid'}}` will look for a layout at `templates/tags/grid.hbs`:

```hbs
<ul class="grid">
  {{yield}}
</ul>
```

Note, you must add `{{yield}}` to each tag layout.

It's that simple! Property bindings, actions, etc, will work as if the `{{tag}}` helper was just plain ol' HTML in your template.

## Questions and Issues

If you have any questions or issues please [open an issue](https://github.com/sir-dunxalot/ember-htmlbars-tags/issues/new)

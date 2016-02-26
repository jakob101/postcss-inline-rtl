# PostCSS Inline Rtl [![Build Status][ci-img]][ci]

[PostCSS] plugin to inline the minimal amount of RTL CSS you need.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jakob101/postcss-inline-rtl.svg
[ci]:      https://travis-ci.org/jakob101/postcss-inline-rtl

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-inline-rtl') ])
```

See [PostCSS] docs for examples for your environment.

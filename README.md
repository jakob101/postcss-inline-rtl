# PostCSS Inline Rtl [![Build Status][ci-img]][ci]

[PostCSS] plugin to inline the minimal amount of RTL CSS you need.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jakob101/postcss-inline-rtl.svg
[ci]:      https://travis-ci.org/jakob101/postcss-inline-rtl

## Requirement
Always have a `dir="ltr"` or `dir="rtl"` in your HTML tag.

## Examples

```css
/*  Normal code */
.class {
  color: red;
} 

/*  => no change */
```

```css
.class{
  border-left: 10px;
  color: red;
}

/*  Converts to: */
html[dir='ltr'] .class {
  border-left: 10px
}
html[dir='rtl'] .class {
  border-right: 10px
}
.class {
  color: red;
}
```

```css
.class {
  margin-left: 10px;
}

/*  converts to: */
html[dir='ltr'] .class {
  margin-left: 10px
}
html[dir='rtl'] .class {
  margin-right: 10px
}
```

```css
/*  Edge case (cancelling LTR/RTL values) */
.class {
  border-left: 10px;
  border: none; /*  Notice this doesn't change LTR-RTL */
}

/*  converts to: */
html[dir] .class {
  border: none;
}
html[dir='ltr'] .class {
  border-left: 10px;
}
html[dir='rtl'] .class {
  border-right: 10px;
}
```

```css
/*  Edge case (RTL-invariant) + CSS modules */
.class {
  composes: otherClass;
  border: none; /*  Notice this doesn't change LTR-RTL */
}

/*  Converts to: */
.class {
    composes: otherClass;
}
html[dir] .class {
  border: none;
}
```

## Usage

```js
postcss([ require('postcss-inline-rtl') ])
```

## Cred
+1 for [rtlcss](https://github.com/MohammadYounes/rtlcss), as this wouldn't exist without it!

See [PostCSS] docs for examples for your environment.

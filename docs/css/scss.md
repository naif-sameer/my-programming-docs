# Scss

**version:** `0.`

## `import` and use advanced architecture

- **scss**
  - helpers
    - `_mixins.scss`
    - `_functions.scss`
  - layout
    - `_global-rules.scss`
  - pages
    - `_contact.scss`
  - variables
    - `_colors.scss`

## Variables

```scss
$primary-color: #ddd;
.card {
  color: $primary-color;
}
```

### change global variable value using `!global`

```scss
.card {
  $primary-color: red !global;
  color: $primary-color;
}
```

## Nesting and parent element

```scss
.card {
  .card-title {
    color: red;
  }

  // direct child
  > .card-body {
    font-size: 2rem;
  }

  &-footer {
    color: red;
  }
}

.card + {
  &.is--active {
    background-color: red;
  }

  &:hover {
    color: blue;
  }

  :not(&) {
    font-size: 2rem;
  }

  [dir='rtl'] & {
    direction: rtl;
  }
}
```

## Property declarations and Placeholder

```scss
.box {
  font-weight: 500;

  font: {
    size: 2rem;
  }

  margin: auto {
    top: 1rem;
    bottom: 0.5rem;
  }
}
```

**Placeholder:**

```scss
%base-box {
  background-color: white;
  border-radius: 2rem;
}

.card {
  @extend .base-box;
  color: red;
}
```

## Control flow => if and else

```scss
$theme: 'light';

.page {
  @if $theme == 'light' {
    background-color: #111;
  } @else if $theme == 'dark' {
    background-color: #aaa;
  } @else {
    @error "this theme value #{$theme} in not valid";
  }
}

$isRounded: false;
.box {
  border-radius: if($rounded, 0.5rem, null); // if($var, value, elseValue)
}
```

## Interpolation

```scss
$company: 'naif';
$position: 'left';

.ad-#{$company} {
  background-image: url('images/#{$company}.png');
  #{$position}: 0;
}

// generate unique id
.box-#{$company}-{unique-id()} {}
```

## comments

```scss
// this comment show only in scss files
/* this comment show only in scss files */

/*! this comment will show in the css file  */

/// Function to do 1234...
///
/// @param {num}
/// the number to deal with
/// @return {int}
```

## mixin and include

```scss
@mixin list-reset {
  padding: 0;
  margin: 0;
  list-style: none;
}

.ul.links {
  @include list-reset;
}

@mixin circle($dimensions) {
  border-radius: 50%;
  width: $dimensions;
  height: $dimensions;
}

.card-avatar {
  @include circle(100px);
  background-color: red;
}
```

[useful repo for mixins](https://github.com/7ninjas/scss-mixins)

## loop => for

```scss
//  include 10
@for $i from 1 through 10 {
}

// not include 10
@for $i from 1 to 10 {
}
```

```scss
$dimensions: 0;

@for $i from 1 through 10 {
  .circle-#{100 + $dimensions} {
    width: $dimensions + 100px;
    height: $dimensions + 100px;
    border-radius: 50%;
  }

  $dimensions: $dimensions + 100;
}
```

## Each + maps

```scss
$themes: red, green, blue;

@each $theme in $themes {
  .#{$theme}-theme {
    .product {
      background-color: $theme;
    }
  }
}

// map
$socials: (
  'facebook': blue,
  'youtube': red,
  'github': black,
);

@each $name, $color in $socials {
  .social-#{name} {
    background-color: $color;
  }
}

$classes: 'one' 20px red, 'two' 15px green;

@each $class, $font, $color in $classes {
  .#{class} {
    font-size: $font;
    background-color: $color;
  }
}
```

## loop -> while

```scss
@while $start <= 10 {
  .w-#{$start} {
    width: $start * 100px;
  }

  $start: $start + 1;
}
```

## Grid system

```scss
$grid_cols: 12;

@for $i from 1 through $grid_cols {
  .col-#{$i} {
    width: percentage($i / $grid_cols);
  }
}
```

## Function

```scss
@function half($size) {
  @return $size / 2;
}

.box {
  $width: 100px;

  width: $width;
  height: half($width);
}

@function calculate($sizes...) {
  $total: 0;
  @each $size in $sizes {
    $total: $total + $size;
  }

  @return $total;
}

.box-2 {
  width: calculate(100px, 200px, 300px); // ===> 600px
}
```

## Mixin with content ⭐⭐⭐⭐

```scss
@mixin keyF($anim-name) {
  @-webkit-keyframes #{$anim-name} {
    @content;
  }

  @keyframes #{$anim-name} {
    @content;
  }
}

@include keyF(fade-in) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### example

```scss
@mixin breakpoints($point) {
  @if $point == sm {
    @media (max-width: 576px) {
      @content;
    }
  } @else if $point == only-md {
    @media (min-width: 768px) and (max-width: 991px) {
      @content;
    }
  } @else if $point == lg {
    @media (min-width: 992px) {
      @content;
    }
  }
}

.box {
  @include breakpoints(sm) {
    font-size: 2rem;
  }

  @include breakpoints(only-md) {
    font-size: 3rem;
  }
}
```

# Html

## [html docs](html-doc.md)

## HTML <input> with list Attribute

```html
<input list="browsers-list" />

<datalist id="browsers-list">
  <option value="Internet Explorer"></option>
  <option value="Firefox"></option>
  <option value="Google Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

## Open HTML Date Picker Dialog On Click Anywhere Inside Input

using css without js

```css
input[type='time'] {
  display: inline-block;
  position: relative;
}

input[type='time']::-webkit-calendar-picker-indicator {
  background: transparent;
  color: transparent;
  width: auto;
  height: auto;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

[resource](https://stackoverflow.com/a/67270510/19299063)

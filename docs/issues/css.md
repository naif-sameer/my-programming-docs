# Css

## li with display flex

if you use `display:flex` with `li` it will hide the list `:marker`

### not work ❌

```html
<li class="flex gap-2">
  <div>One</div>
  <div>Two</div>
</li>
```

### work ✅

```html
<li>
  <div class="flex gap-2">
    <div>One</div>
    <div>Two</div>
  </div>
</li>
```

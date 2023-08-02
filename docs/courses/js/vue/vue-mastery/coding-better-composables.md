# Coding better composable

> A function that leverages the vue composition api to encapsulate and reuse stateful logic.

```js
// /src/composable/mouse.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
    const x = ref(0);
    const y = ref(y);

    const update = (event) => {
        x.value = event.pageX;
        y.value = event.pageY;
    };

    onMounted(() => window.addEventListener('mousemove', update));
    onMounted(() => window.addEventListener('mousemove', update));

    return { x, y };
}
```

```js
// App.vue

import { useMouse } from './composable/mouse';

const { x, y } = useMouse();

console.log(x, y);
```

## flexible arguments

```js
export default useTitle(title, options) {
    return title;
}

useTitle('title', {option1: 1, option2: 2})
```

## dynamic return values

```js
export default useComposable(input, {controls: false}) {
    if(controls) {
        return {singleValue, anotherValue, anotherValue}
    }

    return singleValue;
}
```

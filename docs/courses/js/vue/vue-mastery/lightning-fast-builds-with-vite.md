# Lighting fast builds with vite

## working with assets

```js
import WebWorker from './worker-file.js?worker';
```

```html
<img src="@/assets/logo.svg" />
```

## vite config

```js
// vite.config.js

import vuePlugin from '@vitejs/plugin-vue';

export default {
    plugins: [vuePlugin()],
};
```

## Env Variables and modes

```js
import.meta.env.MODE;
import.meta.env.BASE_URL;
import.meta.env.PROD;
import.meta.env.DEV;
```

`.env`

```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git


```

```env
VITE_SOME_KEY=123
```

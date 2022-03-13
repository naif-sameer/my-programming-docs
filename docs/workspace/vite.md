# vite

## create new project

```bash
pnpm create vite
```

## work with env files

`.env` files are loaded at the start of Vite. Restart the server after making changes.


variables prefixed with **VITE_** are exposed to your Vite-processed code.

```
VITE_APP_TITLE=app title here
```

used on your files
```js
const APP_TITLE = import.meta.env.VITE_APP_TITLE
```
# Tailwindcss

## install
```bash
pnpm i --dev tailwindcss
npx tailwindcss init
```

## Configure template paths
```js
/* tailwind.config.js */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add the Tailwind directives to your CSS
```css
/* input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start the Tailwind CLI build process
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

or in package.json
```json
{
	"scripts": {
    	"css": "tailwindcss -i css/input.css -o css/output.css --watch"
  	}
 }	
```

## install tailwindcss for vite
```bash
# run this command
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
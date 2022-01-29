# svelte docs
>version: 


## basics

```html
	<script>
		let mess = 'Hello World';
		let imgSrc = 'https://images.com/cat.png';
		let alt = 'image alt desc';

		// import Component
		import Card from './Card';
	</script>

	<!-- use your component -->
	<Card />

	<h1> {mess}	</h1>

	<img src={imgSrc} alt="">

	<!-- you can use attributes shorthand 

	 	<img src={imgSrc} {alt}>
	 -->


	 <p>
	 	<!-- if you want to render html code -->
	 	{@html "<b>Your html <i>code</i> here</b>"}
	 </p>


	<style>
		/* style by default scoped to the component */

		h1 {
			color:  red;
		}
	</style>
```

## style

```html

	<h3>Red color</h3>

	<style>

		/* global style */
		:global(h3) {
			color:  red;
		}
	</style>
```
## Events

```html
	<!-- S btn.svelte -->

	<!-- Event forwarding -->
	<button on:click>handle the event from the parent</button>
```

```html
	<!-- Parent.svelte -->
	<script>
		import SBtn from './SBtn.svelte';

		let count = 0;

		function incrementCount() {
			count++;
		}


		// Reactive Declaration
		$: doubled = count * 3;

		// Reactive statement
		$: console.log(count);

		// group of statement
		$: {
			console.log(count);

			if (count > 5) {
				console.log('count is larger than 5');
			}
		}
	</script>

	<h3>{ count }</h3>

	<button on:click={incrementCount}>Increment</button>
	
	<button on:mousemove={e => console.log(e)}>mouse move event</button>

	<button on:click|once={() => console.log('run event only once')}>log</button>

	<button on:click|preventDefault={(e) => console.log('run event only once')}>
		Prevent Default
	</button>

	<SBtn on:click={e => console.log(e)} />
```
> 	Tip 
> 	
> 	- In Array and obj you need to return new reference to make them reactive
> 	
> 	- You can use inline function without any performance issue.

## props

```html
	<!-- Card.svelte -->
	<script>
		export let title = 'default prop value';

		// working with html classes
		let className = '';
		export {className as class};
	</script>

	<h3 class={className}>
		{title}
	</h3>

```


```html
	<!-- Parent.svelte -->
	<script>
		import Card from './Card.svelte';
	</script>

	<Card title='Card title' class="card-title" />

	<!-- if you have an obj 

		<Card {...obj} />
	-->

```


## Binding

```html
	<script>
		let name = '';

		let isOnline = false;

		let fast = '40%';

		let mess = '';

		let iceKind = '';

		let flavors = [];
	</script>

	<h3>{name}</h3>

	<input type="text" name="username" bind:value={name}>
	<!-- 
		when you use bind with input type (number | range)
		svelte will make the value numbers instead of string
	 -->


	 <input type="checkbox" bind:checked={isOnline}>

	 <!-- bind a group -->
	 <input type="radio" bind:group={fast} value="20%">
	 <input type="radio" bind:group={fast} value="40%">
	 <input type="radio" bind:group={fast} value="80%">
	 <input type="radio" bind:group={fast} value="100%">


	 <textarea bind:value={mess}></textarea>

	 <select bind:value={iceKind}>
        <option value="chocolate">chocolate</option>
        <option value="banana">Banana</option>
     </select>

     <!-- select with multiple -->
     <select multiple bind:value={flavors}>
        <option value="chocolate">chocolate</option>
        <option value="banana">Banana</option>
     </select>
```

### class
```html
		
	<script>
		let isDanger = false;
	</script>		

	<!-- shorthand for
		class={isDanger ? 'danger' : ''}
	 -->
	<h3 class:danger={isDanger}></h3>
```

### bind Dimensions
```html
	
	<h2 bind:clientWidth>Dimensions</h2>
	<h2 bind:clientHeight>Dimensions</h2>
	<h2 bind:offsetWidth>Dimensions</h2>
	<h2 bind:offsetHeight>Dimensions</h2>

```


### this keyword
Allow you to option a reference to rendered elements.

```html
	<!-- Input.svelte -->
	<script>
		let input;
		export function focus () {
			input.focus();
		}
	</script>
	<input bind:this={input} type="text">
```

```html
	<!-- Parent.svelte -->
	<script>
		import Input from './Input.svelte';

		let inputField;
	</script>

	<Input bind:this={inputField}>

	<button on:click={() => inputField.focus()}>Focus the input</button>
```


## Logic

```html
	<script>

		let age = 10;
	</script>

	{#if age < 20}
		<h3> You are under 20</h3>

	{#:else if age > 20}
		<h3> You are above 20</h3>

	{#else}
		<h3> Unknown age</h3>

	{/if}

```


## Loops

```html
	<script>
		let cats= [
			{
				id: 1,
				name: 'Aaaa'
			},
			{
				id: 2,
				name: 'Bbbb'
			},
			{
				id: 3,
				name: 'Cccc'
			},
			];
	</script>

	{#each cats as {id, name}, index }

		<h3>
			<span>list index: {index} </span>
		 	Id is: {id} and Name is: {name}
		</h3>
	{/each}


	<!-- loop with key -->
	{#each cats as cat (cat.id) }

		<h3> {cat.name} </h3>
	{/each}

```



## promise

```html
	<script>
		let apiData = fetch('https://ex.com/data.json');
	</script>

	{#await apiData}
		<h3>Loading...</h3>

	{:then data}
		<h3> {data} <h3>


	{:catch error}
		<h3> {error} </h3>
	{/await}
```




## Dynamic components
```html
	<script>
		import TabA from './TabA.svelte';
		import TabB from './TabB.svelte';
		import TabC from './TabC.svelte';


		let activeTab = TabA;
	</script>

	<svelte:component this={activeTab} />

```


## Component Event
```html
	<!-- Child.svelte -->
	<script>
		import {createEventDispatcher} from 'svelte';

		const dispatch = createEventDispatcher();
	</script>

	<!--
		- child 
			dispatch('event', 'data');
		
		-parent
			on:event={(e) => {
				// work with event data
				consol.log(e.detail);
			}}


	 -->
	<button on:click={()=> dispatch('close')}}>
		Close
	</button>
```

```html
	<!-- Parent.svelte -->
	<script>
		import Child from './Child.svelte';

	</script>

	<Child on:close={()=>{}} />
```

### Event forwarding

```html
	<!-- Button.svelte -->
	<button on:click>Close</button>
```

```html
	<!-- Parent.svelte -->
	<script>
		import Button from './Button.svelte';

	</script>

	<Button on:close={()=>{}} />
```



## Component slots
```html
	<!-- Card.svelte -->

	<div>
		<slot />
	</div>

	<!-- slot with default value -->
	<div>
		<slot>Default value</slot>
	</div
```

```html
	<!-- Parent.svelte -->
	<script>
		import Card from './Card.svelte';

	</script>

	<Card>
		<h2>Card title</h2>
	</Card>
```

### Named slots
```html
	<!-- Card.svelte -->

	<div>
		<slot name="header">Default value</slot>
		<slot name="content">Default value</slot>

		<!-- check slots -->
		{#if ##slots.footer}
			<slot name="footer" />
		{/if}
	</div
```

```html
	<!-- Parent.svelte -->
	<script>
		import Card from './Card.svelte';

	</script>

	<Card>
		<div slot="header">Card title</div>
		<div slot="content">Card content</div>
		<div slot="footer">Card footer</div>


	</Card>
```


### slot param
```html
	<!-- Card.svelte -->

	<div>
		<slot name="hero" first="Ahmed" last="Khalid">Default value</slot>
	</div
```

```html
	<!-- Parent.svelte -->
	<script>
		import Card from './Card.svelte';

	</script>

	<Card>
		<div slot="header" let:first let:last>
			{first} - {last}
		</div>

	</Card>
```

## Context
```html
	<!-- Child.svelte -->
	<script>
		import {setContext} from 'svelte';

		// it is recommend to use obj instead of string
		setContext('username-context', 'Ahmed');
	</script>
```

```html
	<!-- Parent.svelte -->
	<script>
		import {getContext} from 'svelte';

		// It is recommend to use obj instead of string
		let name = getContext('username-context');
	</script>

	<h3>{name}</h3>
```

## Life cycle

```html
	<script>
		import {
			onMount,
		   onDestroy,
		   beforeUpdate,
		   afterUpdate,
		   tick
		} from 'svelte';


		/**
		 * if you return a function from the callback function, that function will be called when the components is unmounted
		 * 
		 * - onMount does not render inside a server-side component wheres onDestroy does
		 * */
		onMount(() => {
			console.log('fetch api....');
		});

		// run before the component is unmounted
		onDestroy();

		beforeUpdate();
		afterUpdate();

		// return a promise that resolve once any pending state changes have been applied
		tick();
	</script>

	<h3>data</h3>

```

## Store

```js
	// store/count.js

	import {writable} from 'svelte/store';

	export const count = writable(1);
```

```html
	<script>
		
		import {count} from './store/count';

		function increment() {
			count.update(value => value+1);
		}

		function reset () {
			count.set(0);
		}

		let count_value;

		const unsubscribe = count.subscribe(value => {
			count_value = value;
		});

		onDestroy(unsubscribe);

	</script>

	<h3>{count_value}</h3>

```

You can use `$` to subscribe the store without creating new variable

```html
	<script>
		// our store should be imported at the top level scope
		import {count} from './store/count';
	</script>

	<h3>{$count}</h3>

```

### readable
change the store value Dynamically

```html
	<script >
	
		import {readable} from 'svelte/store';

		let initialValue = new Date();

		const time = readable(initialValue , function start(set) {
			const interval = setInterval(() => {
				set(new Date());
			}, 1000);

			return function stop() {
				clearInterval(interval);
			}	
		});
	</script>


	<h1> {time} </h1>
```


### derived
make a store whose value based on other store value

```html
	<script>
		import {derived} from 'svelte/store'
		import count from './store/count';

		export const elapsed = derived(time, $count => {
			return time + $count;
		})
	</script>

	<h3>data</h3>

```

### Custom store

```js
	// store/count.js
		import {writable} from 'svelte/store'

		function createCount () {
			const {subscribe, set, update} = writable(0);

			return {
				subscribe, //required
				increment: () => update(n => n+1),
				decrement: () => update(n => n-1),
				reset: () => set(0),
			}
		}

		export const count = createCount();

```


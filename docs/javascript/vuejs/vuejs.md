# Vuejs Docs

## Basics

### Binding Text

when use `v-text` to bind the data to html it will replace all the content inside the element

```html
	<template>
		<div>
			{{name}}

			<div v-text="greet"></div>
		</div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					name: "Batman",
					greet: "Hi"
				}
			}
		}
	</script>
```



### Bindig html

**Note** Don't trust user input 

```html
	<template>
		<div v-html="greet"></div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					greet: "<b> Hi </b>"
				}
			}
		}
	</script>
```


### Binding Attributes

`v-bind:class` or short hand `:class`
```html
	<template>
		<div>
			<div v-bind:id="dataId">bind id</div>

			<button v-bind:disabled="isDisabled">Disabled btn</button>

			<div v-bind:class="isDisabled ? 'hidden' : 'show'" class="card">
				class binding
			</div>

			<div v-bind:class="['class1', isOnline ? 'online' : 'offline']">
				class Binding ==> Array conditional
			</div>

			<div v-bind:class="{class1: isOnline">
				class Binding ==> Object conditional
			</div>

			<h2 v-bind:style="{color: themeColor}">
				Style Binding
			</h2>


			<div :class="">
				v-bind short hand
			</div>
		</div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					dataId: 3,
					isDisabled: true,
					isOnline: true,
					themeColor: 'red'
				}
			}
		}
	</script>
```


### Conditional Rendering

you can use `<template>` to wrap elements

```html
	<template>
		<div>
			
			<!-- if else -->
				<div v-if="age < 20">
					you are under 20
				</div>

				<div v-else-if="age >= 20">
					You are above 20
				</div>

				<div v-else>
					Unknow age
				</div>

			<!-- v-show -->
				<div v-show="isOnline">
					User is online
				</div>
		</div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					age: 23,
					isOnline: true,
				}
			}
		}
	</script>
```

- `v-if` will remove the element from the `DOM`
- `v-show` will add `display: none` to the element

### loops
```html
	<template>
		<div>
			<!-- array loop -->
				<div v-for="name in names" :key="name">
					{{name}}
				</div>

			<!-- Array of object loop -->
				<div v-for="(item, index) in list" :key="item.id">
					{{index}} - {{item.title}}
				</div>

			<!-- object loop -->
				<div v-for="(value, key, index) in info" :key="key">
					{{key}} - {{value}}
				</div>
		</div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					names: ['Ali', 'Ahmed', 'Naif'],
					list: [
						{ id: 2, title: 'Apple'},
						{ id: 3, title: 'Orange'}
					],
					info: {
						name: 'Naif',
						age: 20,
						isOnline: true
					}
				}
			}
		}
	</script>
```


### Methods and events

Event like
- click
- mouseover

`v-on:click=""` or use short hand `@click`

```html
	<template>

		<!-- method -->
			<div> {{ getName() }}</div>

		<!-- method with event -->
			<button v-on:click="alert('hi')">
				Say hi
			</button>

			<button @click="greet"> Greet</button>
				
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return { name: "Batman" }
			},
			methods: {
				getName() {
					return this.name;
				},
				greet(event) {
					alert('Hello');
				}
			}
		}
	</script>
```


#### pass the event

```html
	<template>
		<!-- pass the event to the method -->
			<button @click="plus('', $event)"> plus</button>
		
		<!-- multibly method -->
			<!-- 
				on `method1`
				doesn't pass event obj to the method
			 -->
			<button @click="method1, changeName('', $event)">
				
			</button>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return { name: "Batman" }
			},
			methods: {
				plus(event) {},
				method1(){},
				changeName(event){}
			}
		}
	</script>
```


### Form handling
```html
	<template>
		<form @submit="handleForm">
			
		<!-- input -->
			<input v-model="name" />

		<!-- textarea -->
			<textarea v-model="message"></textarea>

		<!-- select -->
			<select v-model="skill">
				<option value="html">Html</option>
				<option value="css">Css</option>
			</select>

		<!-- multiple select -->
			<select v-model="jobLocation" multiple>
				<option value="use">USA</option>
				<option value="japan">Japan</option>
			</select>

		<!-- single checkbox -->
			<input type="checkbox" v-model="isOnline"> is online

		<!-- multiple checkbox -->
			<input type="checkbox" value="html" v-model="lang"> Html
			<input type="checkbox" value="css" v-model="lang"> Css

		<!-- Radio -->
			<input type="radio" value="usa" v-model="country"> USA
			<input type="radio" value="japan" v-model="country"> Japan

		</form>

	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					name: '',
					message: '',
					skill: '',
					jobLocation: [],
					isOnline: true,
					lang: [],
					country: '',
				}
			},
			methods: {
				handleForm(e) {
					e.preventDefault();
				}
			}
		}
	</script>
```


### Modifiers

with `v-model` are
- `trim`
- `number`
- `lazy` bind the data after the event change

we can use multible modifiers `v-model.trim.lazy`

with `@submit`
- `prevent` prevent the event

with `@keyup`
- `enter` on press enter btn will submit

```html
	<template>
		<input v-model.trim="name" />
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					name: ""
				}
			}
		}
	</script>
```


### Bonus Directives
- `v-once` renders the corresponding html element only once.
- `v-pre` skips comilation for the corresponding element.


### Custom directives
`v-on:click.stop=""`
- `v-on:` directive
- `click` argement
- `.stop` modifires
- `""` value

```html
	<div v-color="red"></div>
	
	<div v-color.border="2px solid red"></div>

	<script>
		Vue.directive('color', {
			inseted(el, binding) {
				// value
					el.style.color = binding.value;

				// modifires
					if(binding.modifiers.border) {
						el.style.border = binding.value;
					}
			}
		});
	</script>

```


### Computed Properties
>	Properties that can be bound to template like data properties


- They are used for composing new data from existing source
- They'er highly peformanct as they are cashed calculations which only update when thire dependencies change.

```html
	<template>
		<div> {{fullName()}} </div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					fname: 'Ahmed',
					lname: 'Khalid'
				}
			},
			computed: {
				fullName() {
					return this.fname + this.lname;
				},

				// Compted setter
					fullName() {
						get() {
							return this.fname + this.lname;
						},

						set(value) {
							this.fname = value.split(' ')[0];
							this.lname = value.split(' ')[1];
						}
					}
					// now you can set the value `this.fullName = ''`
			}
		}
	</script>
```

The most usage for computed when sorting and filtering data in a table.



### Watchers
Allow you to watch any data or computed property and execute some code in response to changes in the value.

```html
	<template>
		<div v-html="greet"></div>
	</template>

	<script>
		export default {
			name: "app",
			data: () => {
				return {
					greet: "<b> Hi </b>"
				}
			},
			watch: {
				greet(newValue, oldValue) {
					// code...
				}

				// If you want to run the watcher when page load.
				movie: {
					handler(newV, oldV) {},
					immediate: true,
					deep: true, // if you want to run watch in obj and array
				}


			}
		}
	</script>
```


### Computed vs watch
Use Computed when:
1. You need to compose new data from existing data source.
2. You need to reduce the length of varivale

Use Watchers when:
1. You have to check if a property has changed to a favorable value to know if you'er ready to perform an action.
2. You have to call an api and response to change in application data.
3. You have to apply transitions.


## components

### props
```html

	<!-- Greet.vue -->
		<template>
			<h2> {{name}} - {{heroName}} </h2>
		</template>

		<script>
			export default {
				name: "Greet",
				props: ['name', 'heroName']
			}
		</script>


	<!-- Parent.vue -->
		<Greet name="Naif" heroName="superMan"
```

#### prop type and validation
```js
	export default {
		props: {
			name: string,
			heroName: {
				type: string,
				required: true,
				default: 'Super Man'
			}
		}
	}
```

#### Non prop Attributes
Is an attribute that is passed to a component, but does not have a corresponding property defined in the props option.

- if you don't have a root div inside component vue will not able the attribute

`v-bind:"$attrs"` set on the elements that we want to have non-attrs

```js
	props: {
		inheritAttrs: false // disable vue dufault behavior on root component
	}
```


### Provide/inject
The two api provide a way to pass data through the component tree without having to pass down props manually at every level.

1. `provide` the value in the app component.
2. `inject` the value in the component child.


```html
	<!-- App.vue -->
		<template>
			<Child />
		</template>
		<script>
			export default {
				name: "app",
				data: () => {
					return {name: "Naif"}
				},
			
				provide: {
					username: "Naif"
				}

				// or use this way if you want to access data obj
					provide(){
						return {
							username: this.name,
						}
					}
			}
		</script>

	<!-- Child.vue -->
		<template>
			{{username}}
		</template>

		<script>
			export default {
				name: 'Child',
				inject: ['username'],
			}	
		</script>
```

### Custom Component Events
```html

	<!-- Child.vue -->
		<template>
			<button @click="$emit('close', 'args')" ></button>
		</template>
		<script>
			export default {
				name: "app",
				emits: ['close']			
			}
		</script>

	<!-- Parent.vue -->
		<template>
			<Child @close="closePopup" />

			<!-- if you want to use native event -->
				<Btn @click.native="" />
		</template>

		<script>
			export default {
				name: 'Child',
				methods: {
					closePoup(name) {
						// name is the args we pass
					}
				}
			}	
		</script>
```

#### Validation emitted events
```js
	emits: {
		close: (name) => {
			// code...
		}
	}
```

### Component and v-model.

we use `$emit('update:modelValue', $event.target.value)` for
send new value to v-model in the parent component.

```html
	<!-- Child.vue -->
		<template>
			<input :value="modelValue" 
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</template>

		<script>
			export default {
				name: "Child",
				props: {
					modelValue: string
				}			
			}
		</script>

	<!-- Parent.vue -->
		<template>
			<Input v-model="text" />
		</template>

		<script>
			export default {
				name: 'Parent',
				data: () {
					return {
						text: ''
					}
				}
			}	
		</script>
```


### Slots
```html
	<!-- Child.vue -->
		<template>
			<slots>
				Default value.
			</slots>
		</template>


	<!-- Parent.vue -->
		<template>
			<Child>
				Content or Element
			</Child>
		</template>

		<script>
			export default {
				name: 'Parent',
			}	
		</script>
```


#### Named Slots
```html
	<!-- Child.vue -->
		<template>
			<!-- Header -->
				<div>
					<slot name='header'></slot>
				</div>

			<!-- default -->
				<div>
					<slot></slot>
				</div>
		</template>


	<!-- Parent.vue -->
		<template>
			<Child>
				<template v-slot:header>
					<h2>Header</h2>
				</template>

				<template v-slot:default>
					<p>Default</p>
				</template>
			</Child>
		</template>

		<script>
			export default {
				name: 'Parent',
			}	
		</script>
```

#### Slots Props
```html
	<!-- Child.vue -->
		<template>
			<div>
				<slot firstName="fName"></slot>
			</div>
		</template>


	<!-- Parent.vue -->
		<template>
			<Child>
				<template v-slot:default="SlotProps">
					{{SlotProps.fName}}
				</template>
			</Child>
		</template>

		<script>
			export default {
				name: 'Parent',
			}	
		</script>
```


### Component Style
By default, a component styles are applied globally in the component tree.


`scoped` attribute ensures a components's css will apply only its html elements.

- With Scoped, the parent component's styles will not leak into child components, Hovever, a child component's root node will be offected by both the parent's scoped and the child scoped.

- When using slots, the parent components styles are applied and not the child component style. even through the content is embeded inside the Child Component.
```html
	<style scoped>
		
	</style>
```

### Dynamic Component
```html
	<component :is="ComponentName" />


	<!-- cashe the component usefull with multiple form tap -->
		<keep-alive>
			<component :is="" />
		</keep-alive>

	<script>
		export default {
			data: () {
				return {
					ComponentName: 'ChildA'
				}
			}
		}
	</script>
```

### Teleport Component
```html
	<teleport to="#portal-dir-root">
		<div>...</div>
	<teleport>
```

### Component Lifecycle Hooks
A vue components can go through 4 phases
1. creation `beforeCreate()` , `created()` 
2. Mounting `beforeMount()` , `mounted()`
3. Updating `beforeUpdate()`, `update()`
4. Unmounting `beforeUnmount`, `unmounted()`
5. MISC `activated` `deactivated()`, `renderTracked()`, `renderTriggered()`


| hooks | describtion |
| -------------- | ------- |
| beforeCreate | Can't use data, computed , watchers, and methods |
| created | Best place for api call |
| beforeMount, mounted | should be use for modifed dom a possible use case is focusing an input |
| beforeUpdate | used to remove event listener before delete dom |
| updated | Triggered when a reactive property `data`, `computed` change or re-renders |
| beforeUnmount | component is about to ve removed |
| unmouneted | component is removed from the dom |
| activated, deactivated | keep a live component use when working with dynamic components |
| renderTracked(), renderTriggered() | useful for debugging |



### Temeplate Refs
`refs` make it possible to access `DOM` directly within vue.

```html
	<template>
		<input type="text" ref="inputRef">
	</template>

	<script>
		export default {
			name: "App",
			mounted() {
				this.$refs.inputRef.focus();
			}
		}
	</script>
	
```

- if `ref` is used on a plain `DOM` element hte `ref` will be that element.
- if `ref` is used on a `Child` component the reference will be the component instance.



### Reusabilty with mixins
You can mix
- `computed`
- `watchers`
- `life sycle hooks`

```js
	/* mixins/counter.js */
	export default {
		data() {
			return {
				count: 0
			}
		},
		methods: {
			incrementCount() {
				this.count++;
			}
		}
	}	
```

```html
	<!-- Child.vue -->
		<script>
			import CounterMixin from 'mixins/counter';

			export default {
				mixins: [CounterMixin];
			}
		</script>
```


Merging of different optins 
_`the same option in the component and mixin`_
by default the component option gets the higher.



## Composition Api
The composition api is a feature in vue3 which gives us another way to write our components more speufically, the script block in  a component.


**Why composition api?** 
1. Vue projects become hard to manage as they grew in size and complexity.
2. Re-using logic across components become difficult.

>	The composition api allows us to encapusulate one piece of functionality so that you can use it in different components throught the appliacation.



### `reactive`, `ref` to replace data.

**ref**
```js
	import {ref} from 'vue';

	export default {
		setup() {
			// replace data with composition api
				const username = ref('Naif');

				// if you want to use the value inside setup
					console.log(username.value)

				// return a reactive refernce to a value.
				return {
					username
				}
		}
	}

```


**reactive**
```js
	import {reactive} from 'vue';

	export default {
		setup() {
		
			const state = reactive({
				username: 'naif4web',
				name: 'Naif'
			});

			// if you want to use the value inside setup
				console.log(state.name, state.username);

			return {
				state
			}
		}
	}

```

- use `ref` fucntion when dealing with primitive type like string.
- use `reactive` when a group of primitives are togeather


**toRefs**
from `reactive` value to `ref`;


`toRefs` return obj;
```js
	import { toRefs, reactive } from 'vue';

	export default {
		setup() {
		
			const state = reactive({
				username: 'naif4web',
				name: 'Naif'
			});

			return toRefs(state);
			// now you can access `username` and `name` directlly
		}
	}

```


### methods

```js
	import { ref, reactive, toRefs } from 'vue';

	export default {
		setup() {
		
			const count = ref(0);
			const state = reactive({
				name: 'Naif',
				age: 20
			});

			function incrementCount() {
				count.value++;
			}

			return {
				count,
				incrementCount,
				...toRefs(state)
			};
		}
	}

```



### computed

```js
	import { ref, reactive, toRefs } from 'vue';

	export default {
		setup() {
			const state = reactive({
				firstName: 'Naif',
				lastName: 'Sameer'
			});

			
			const fullName = computed(() => {
				return `${state.firstName} ${state.lastName}`;
			});

			return {
				fullName,
				...toRefs(state)
			};
		}
	}

```


### watch with `ref`

```js
	import { ref, watch } from 'vue';

	export default {
		setup() {
		  	const f = ref('naif');
			const l = ref('sameer');

			watch([f, l], (newV, oldV) => console.table(newV, oldV),
				{immediate: true });

			return { f, l, };
		}
	}

```


### watch with `reactive`

>	if you have deep obj you need to clone the object.

```js
	import { reactive, watch } from 'vue';

	export default {
		setup() {
		  	const info = reactive({
		    	f: 'naif',
		    	l: 'sameer',
		    });

			watch(info, (n, o) => console.table(n, o),
				{immediate: true, deep: true });

			return { info };
		}
	}

```



### Lifecycle hooks with composition api

| Options api     | Hooks inside setup |
| --------------- | ------------------ |
| beforeCreate    | not needed 		   |
| created         | not needed 		   |
| beforeMount     | onBeforeMount 	   |
| mounted         | onMounted 		   |
| beforeUpdate    | onBeforeUpdate     |
| updated 		  | onUpdated  		   |
| beforeUnmount   | onBeforeUnmount    |
| unmounted 	  | onUnmounted 	   |
| errorCaptured   | onErrorCaptured    |
| renderTracked   | onRenderTracked    |
| renderTriggered | onRenderTriggered  |

```js
	import { reactive, onBeforeMount } from 'vue';

	export default {
		setup() {
		  	const info = reactive({
		    	f: 'naif',
		    	l: 'sameer',
		    });

			onBeforeMount(()=> {
				console.log('before mount');

			})

			return { info };
		}
	}

```


### Provide inject
```js
	/* Parent.js */
		import { provide, reactive } from 'vue';

		export default {
			setup() {
			  	provide('username', 'Naif');

			  	const state = reactive({name: 'ali', age: 20});

			  	provide('state', state);
			}
		}


	/* Child.js */
		import { inject, reactive } from 'vue';

		export default {
			setup() {
			  	const  username = inject('username', 'username@300');

			  	const  state = inject('state', {});
			}
		}

```

if you want to change values the recommend way to edit in the parent.



### refs template

```html
	<input ref="inputRef" type="text" name="">

	<script>
		import { onMounted, reactive, ref } from 'vue';

		export default {
			setup() {
				const inputRef = ref(null);

				onMounted(()=> {
					inputRef.value.focus();
				})

			  	return {inputRef}
			}
		}
	</script>
```


### Props
`setup(props) {}`

```html
	<script>
		export default {
			props: ['name', 'age'],
			setup({name, age}) {
				
				console.log(name, age);
			}
		}
	</script>
```


### Custom event
```html
	<!-- Child.vue -->
	<template>
		<button @click="sendEvent">
			send event
		</button>
	</template>
	<script>
		export default {
			props: ['fName', 'lName'],
			emits: ['call'],
			setup({fName, lName}, context) {

				const fullName = computed(() => fName + lName);

				function sendEvent() {
					context.emit('call', fullName);
				}

				return {
					fullName,
					sendEvent
				}
			}				
		}
	</script>


	<!-- Parent.vue -->
		<Child @call="eventHandler" f-name="naif" l-name="naif" /> 
```


### Reusability.
better than `mixins`
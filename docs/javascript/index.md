# Javascript docs.

## docs tools and frameworks

## Basics

### Variables

Must start with [letter, under score, $]

```js
var name = 'value';
let skills = ['value', 'value'];
const age = 20;
```

**Data type in javascript**

- String
- Array
- Object
- Number
- Null
- Symbol

```js
	typeof() // check the data types.
```

### Operators

#### Assignment

- `+=` `-=` `*=` `/=` `%=`
- `**=` es6+ new features.
- `|=` es6+ Destructuring.
- `<<=` `>>=` `>>>=` `&=` `^=`

#### Comparison

- `==` `===` `!=` `!==`
- `>` `>=` `<` `<=`

#### Arithmetic

- `x++` return the value before adding or one.
- `++x` return the value after adding one.
- `--x`
- `x--`
- `-x` return the negative of its operand

#### Logical + `&&` + `||` + `!`

**Note** precedence of `&&` is higher than `||`

#### **Bitwise operator** works with bits

- `&` and ex. 15 & 9 ---> 1111 & 1001 ---> 1001
- `|` or ex. 1111 | 1001 ---> 1111
- `^` xor ex. 1111 ^ 1001 ---> 0110 `same bit return zero different bit return one`

### Promise

**properties of the promise**

- `state` initially `pending` then changes to either
  - `fulfilled` resolve called
  - `rejected` reject called
- `result` initially `undefined` => `value` or `error`

There can be only a single result or error.
`resolve`, `reject` expect only one argument or `none`

```js
let promise = new Promise((resolve, reject) => {
  resolve('value'); // if the job finished successfully.

  //or
  reject('error'); // if an error occurred.
});
```

`promise.then((result)=> {}, (err) => {})`

- first arg resolve function.
- second arg rejected function.

`promise.catch((err)=>{})` error handling.

`promise.finally(() => {})` has no arguments.

#### Promise api

```js
Promise
  // takes an array of promises and returns a new promise.
  .all([promise1, promise2])

  .allSettled()

  // wait only for the first settled promise and gets its result or error.
  .race([])

  .resolve(value)
  .reject(error);
```

## Advanced

### Notes

1. Call Stack
   - Mechanism to make interpreter track your call.
   - when you call a function its added to the stack.
   - when function executed its remove from the stack.
   - the interpreter continue calling from the last point.
   - call stack decked web api and leave it to the browser to handle it.
2. Web api
   - Methods available from Environment `Browser`
   - when complete it add the callback to the callback queue.
   - Mechanism to make interpreter track your call.
   - when you call a function its added to the stack.
   - when function executed its remove from the stack.
   - the interpreter continue calling from the last point.
   - call stack detect web api and leave it to the browser to handle it.
3. Web api
   - Methods available from Environment `Browser`
   - when complete it add the callback to the callback queue.
4. Event loop
   - wait the call stack to finish.
   - get callback from callback queue.
   - add callback to call stack.
5. Callback queue.
   - function called and do the task.
   - action complete.
   - another function called

### function binding

Usually we apply bind to fix `this` for an object method. so that we can pass it somewhere. like in setTimeout.

```js
let user = { name: 'ali' };

function log(param) {
  console.log(this.name);
}

let bindFunction = log.bind(user); // you can pass an  args to the log function

bindFunction();
```

### Object

```js
Object

	.create(proto, [secretions]);

	.getPrototypeOf(obj);

	.setPrototypeOf(obj, proto)

	// these should used instead of `__proto__`
	// `__proto__` bad in the speed
```

#### some methods

```js
// Note these methods are rarely used in practice.
Object.preventExtensions(obj) // forbids the addition of new properties to the object

  .seal(obj) // forbids adding/removing of properties sets `configurable: false` for all existing properties

  .freeze(obj) // forbids adding/removing/changing of properties. sets `configurable: false, writable: false` for all existing properties.

  // checking

  .isExtensible(obj) // check if adding properties is forbidden

  .isSeated(obj) // check if adding/removing properties is forbidden and all existing properties have `configurable: false`

  .isFrozen(obj); // if it Object.freeze()
```

#### getter and setter

```js
let user = {
  _name: '',
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};

user.name = 'Naif';
console.log(user.name);
```

#### Prototypal inheritance

`__proto__` getter || setter for prototype

- There references can't go in circles.
- The value can be either an object or null. other types are ignore.
- Object can't inherit from two others object.
- `this` is not affected by prototypes at all.
- `for in` loop iterates over inherited properties too.

```js
Object.hasOwnProperty(key)

  // keys() and values() ignore inherited properties
  .keys(obj)
  .values(obj);
```

### Classes

```js
class Car {
  _name = '';

  constructor() {}

  log() {}

  // computed name [...]
  // dynamic name for the methods
  ['hi' + 'by']() {}

  // getter and setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // making bound methods with class useful if you use
  // setTimeout and you want to bind `this`
  // making bound methods with class useful if you use
  // setTimeout and you want to bind `this`

  click = () => {
    console.log(this._name);
  };
}
```

**Class inheritance**
Internals.

- methods remember their class/object in the internal `[[HomeObject]]` property. that's how `super()` resolves parent methods
- So It's not safe to copy a method `super` from one object to another

```js
class Parent {}

class Child extends Parent {
  constructor(name, age) {
    super(name);
  }
}
```

**Static properties and methods**
Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.

- Static properties and methods are inherited.

```js
class User {
  static version = '3.4.5';
  static remove(id) {}
}

User.version;
User.remove(3);
```

**private and protected properties**

- `protected` properties are usually prefixed with an underscore `_name`
- `private` there are only accessible from inside the class.
  to make the property `read-only` use only `getter`

---

**instanceof operator**

```js
class User {}

const user = new User();

console.log(user instanceof User);
```

Type checking methods
| type | checking methods | return |
| ------------- | ----------------------------- | --------------|
| typeof | primitives | string |
| {}.toString | primitives and builtin object | string |
| instanceof | objects | true/false |

---

### Error handling

- try catch works synchronously.
- use `throw` operator to generate an error.

**built in** constructors for standard errors.

- `new Error('mess')`
- `new SyntaxError('mess')`
- `new ReferenceError('mess')`
- `new TypeError('mess')`

Error objects have following properties.

- `message`
- `name` err constructor name
- `stack`

```js
try {
} catch (err) {
} finally {
}
```

## OOP

### Defining object

1. object literal

```js
let user = {
  // properties
  name: 'Naif',

  // methods
  getName() {
    return this.name;
  },
};

// Accessing object properties
user.name; // dot notation

user['name']; // bracket notation

// Accessing object methods
user.getName();
```

2. With new key word

```js
let user = new Object();
user.name = 'Naif';
```

3. With `Object.create()`

```js
let user = { name: 'Naif' };

let admin = Object.create(user);
```

4. With `Object.assign()`

```js
let user = { name: 'Naif' };

let admin = Object.assign({}, user); // assign('target obj', 'src obj');
```

**delete** operator

- delete property not objects.
- can't delete variable `let` and `const`
- can't delete obj if it set by `Object.freeze()`
- can't delete properties if it object flags with `configurable: false`

### Constructor function

```js
function Phone(serial, color) {
  // properties
  this.serial = serial;
  this.color = color;

  // methods
  this.getInfo = () => this.serial + this.color;
}

let phone = new Phone(12345, 'red');

// check if it instance from the function contractor
console.log(phone instanceof Phone);
// or
console.log(phone.constructor === Phone);
```

### Built in constructors

**prototype**

```js
function User() {}

U.prototype; // return object have property and value

// add method to prototype chain
U.prototype.getName = () => {};

// Extend constructor features
// don't use this in production code.
String.prototype.hi = () => 'hi';

console.log('some text'.hi());
```

### Meta data

- When you use `Object.defineProperty` you have access to control the property.
- by default every thing in descriptor are `false`

```js
// defineProperty(obj, prop, descriptor)
let obj = Object.defineProperty({}, 'name', {
  writable: false, // edit it
  enumerable: false, // loop it
  configurable: false, // delete or configure it
  value: 'Naif',
});

let obj = Object.defineProperties(
  {},
  {
    name: {
      writable: false,
      enumerable: false,
      configurable: false,
      value: 'Naif',
    },
    age: {
      /*...*/
    },
  }
);

// get descriptor
console.log(Object.getOwnDescriptor(obj, prop));

// clone obj
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

### Class

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  // static properties and methods new in es6+
  static counter = 1;

  static changeName = () => {};
}

// inheritance
// if you don't have any method to add you don't need to extend the class.

class Admin extends User {
  constructor(name) {
    super(name);
  }

  // getter and setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```

## Es6+

### Enhanced object literals

```js
// property value short hand
let user = 'A';

let info {
  // old
    user: user

  // new
    user,
}

// method shorthand
let info = {
  // old
    show: function () {}

  // new
    show() {}
}

// Computed object property name
// old
  let keyApi = '23993';
  let obj = {}
  obj[keyApi] = 'value'

// new
  let keyApi = '1234'
  let obj = {
    [keyApi]: 'value'
  }
```

### Array

```js
Array.of('element to create the array')

  .from(Iterable, [mapFunction], [this])

  .fill(value, 'start default 0', 'end')

  .find((e) => {})

  .findIndex()

  .copyWithin(target, start, end);
```

### Set

```js
// iterable any element we can loop it. like string.
let setArr = new Set('iterable');

setArr.add('value').delete('value').has('value').size().clear();
```

### Map

```js
	let map = new Map([
		['name': 'Naif'],
		['age': 20]
	]);

	map
		.set('key', 'value')
		.size()
		.get('key')
		.has('key')
		.clear()
		.delete('key')
```

### Symbols

Symbols are unique.

**Notes**

- when we loop over obj. `symbol` key will not looped.
- Symbol not auto convert to string

```js
let symbol = Symbol();
// Symbol('label') add the param for debugging only

// search in global Symbol if it found will access it, if not found will create new one.
let mySymbol = Symbol.for('testing');

console.log(Symbol.keyFor(mySymbol)); // testing

console.log(mySymbol.description);
```

### forEach

`forEach` skip undefined value

```js
let arr = [1, 2, 3, 4];

arr.forEach((currentValue, index, array) => {
  // ...
});
```

### weakSet , weakMap

| set + map             | weakSet + weakMap            |
| --------------------- | ---------------------------- |
| any type of values    | only object                  |
| you can use `size()`  | you can't get elements count |
| you can use `forEach` | you can't use `forEach`      |
| you can get its keys  | you can't get its keys       |

### Symbol iterator and for of loop

- `Iterable` => object has `Symbol.Iterator`
- `Iterator` =>
  - object with interface design for Iteration.
  - All `Iterators` has `next()` that return result object.
    - The result object has two props.
      1.  `value` the next value
      2.  `done` boolean value to tell if the next value exists or no.

`for of`

1. call `Symbol.Iterator` with next method.
2. save value inside variable.
3. check for done. if its `true` exit the loop.

```js
let name = 'Naif';

let iterator = name[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());

for (let char of name) {
  console.log(char);
}
```

**Custom iterable object**

```js
const obj = {
  name; 'Ahmed',
  age: 30,
  [Symbol.iterator]() {
    let step = 0;
    let properties = Object.keys(this);

    return {
      next() {
        return {
          value: properties[step],
          done: step++ === properties.length
        }

      }
    }
  }
}
```

### Generators

- return a special object called `generator object`
- We can use `for of` to loop over the values
- generators are iterable

```js
function* looping() {
  yield 1;
  yield 2;
  yield 3;
}

looping.next(); // return {value: '', done: false}
```

**Delegating**

```js
function* one() {
  yield 1;
}

function* Two() {
  yield 2;
}

function* all() {
  yield* one();
  yield* two();
}
```

### Modules

- `import.meta` contains the information about the current module
- `this` in module is undefined.

```js
/* admin.js */
export let admin = {};

let a = 3;
// aliases
export { a as rank };

/* app.js */
import { admin } from './admin.js';

import * as admin from './admin.js';
```

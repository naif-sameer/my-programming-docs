# Typescript Docs

## Basics

### Basic types

```ts
let id: number = 5;

let company: string = 'ABC';

let isOnline: boolean = true;

let x: any = 'any value type';

// Array of number
let ids: number[] = [1, 3, 6];

// Array of any types
let arr: any[] = [1, true, 'Ali'];
```

### Tuple

```ts
let person: [number, string] = [2000, 'Naif'];

// tuple array
let employee: [number, boolean][] = [
  [2, true],
  [3, false],
];
```

### Union

```ts
let pId: number | string = '2';
```

### Enum

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// get values number
console.log(Direction.Up); // 0

// get key name
console.log(Direction['Up']); // 'Up'
```

### type with objects

```ts
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Naif',
};
```

### Type assertion

```ts
let cId: any = 123;

// first way
let customerId = <number>cId;

// second way
let customerId = cId as number;
```

### function

optional param `y?` should be the last parameters

you can add type to function return `number, string, boolean` | `void`

```ts
function addNumb(x: number, y?: number): number {
  return x + y;
}

// default value for params
function add(n1: number, n2: number = 20): number {}
```

### Interfaces

```ts
Interface User {
	readonly id: number
				name: string
				age?: number
}

const user: User = { id: 1, name: "Naif"};


// interface with function
	Interface MathFunc {
		(x: number, y: number): number
	}
	const add: MathFunc = (x: number, y: number): number => x+y;


	Interface Person {
		fName: string
		lName: string
	}
	function fullName(person: Person) {}


// interface with classes
	Interface IPrint {
		print()
	}

	// you can inherit multiple interface `Interface1, Interface2, ...`
	class PrintMess implements IPrint {
		print(){}
	}


// Inheritance
	interface InterfaceBase = {
		id: number
	}

	interface InterfaceUser extends InterfaceBase {
		name: string
	}
```

### Classes

```ts
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Class with readonly
  readonly username: string;

  // Access modifiers
  public age: number;

  // only access from the class
  private isOnline: boolean;

  // only from class and sup class
  protected isLogin: boolean;

  // class get|set value
  private _id: number;
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(newNamw: string): void {
    this._name = newName;
  }

  // class static
  static _hoppies: string;
  static print() {
    // only access static data
  }
}

// static class
User._hoppies = 'Test static property';

// Sup Class
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);

    this.position = position;
  }
}
```

### Generics

```ts
function getArray<T>(items: T[]): T[] {
  return [...items];
}

let numArr = getArray<number>([1, 2, 3]);

let strArr = getArray<string>(['Mario', 'Naif']);
```

## Ts config.json

```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

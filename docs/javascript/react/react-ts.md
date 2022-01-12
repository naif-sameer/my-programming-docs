# React with Typescript docs

## Basics

### Typing props
```tsx
	type GreetProps = {
		name: string,
		lastName?: string
	}

	function Greet(props: GreetProps) {}


	// props with objct
		type PersonProps = {
			name: {
				first: string
				last: string
			}
		}

	// Array of objects
		type PersonListProps = {
			name: {
				first: string
				last: string
			}[]
		}


	// specifc the param value
		type StatusProps = {
			state: 'loading' | 'success' | 'error'
		}


	// if the child is just a string 
		type HeadingProps = {
			children: string
		}

	// if the child is a react element
		type MolduleProps = {
			children: React.ReactNode
		}

	// handle change event
		type InputProps = {
			value: string
			handleChange: (event: React.ChangesEvent<HTMLInputElement>) => void
		}

	// Type button
		type ButtonProps = {
			handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void
		}

	// Css style
		type ContainerProps = {
			styles: React.CSSProperties
		}


	//	setState
		type AuthUser = {
			name: string
			email: string
		}
		const [user, setUser] = useState<AuthUser|null>(null);

		/*** or ***/

		// using type assertion.
			useState<AuthUser>({} as AuthUser)



	// useReduce
		type CounterState = { count : number }

		type UpdateAction = {
			type: 'increment' | 'decrement'
			payload: number
		}

		type ResetAction = { type: 'reset' }

		type CounterAction = UpdateAction | ResetAction

		function reducer(state: CounterState, action: CounterAction) {}


	// useRef
		const inputRef = useRef<HTMLInputElement>(null);


	
	//	Component
		type PrivateProps = {
			isLoggedIn: boolean
			Component: React.ComponentType
		}

	// type asscenation
		type ListProps<T> = {
			item: T[]
			onClick: (value: T) => void
		}


		const list = <T extends {id: number}>({item, onClick}): ListProps<T> => {}
```



### Restricting Props

```ts
	type RandomNumberType = {
		value: number
	}

	type PositiveNumber = RandomNumberType & {
		isPositive: boolean
		isNegative?: never
	}

	type NegativeNumber = RandomNumberType & {
		isNegative: boolean
		isPositive?: never
	}

	type RandomNumberProps = PositiveNumber | NegativeNumber

```



### Template Literals and exclude

```tsx
	type HorizontalPosition = 'left' | 'center' | 'right';
	type VerticalPosition = 'top' | 'center' | 'bottom'

	type ToastProps = {
		position: Exclude<`${HorizontalPosition} - ${VerticalPosition}`,
						'center-center'> | 'center'
	}
```



### Type with button

```tsx
	type ButtonProps = {
		variant: 'primary' | 'secondary'
		children: string
	} & Omit<React.ComponentProps<'button'>, 'children'>

```


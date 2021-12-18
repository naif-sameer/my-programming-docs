# Php docs

## basics
```php

	echo 'Hello world!';


	/* comments */
	# comment
	// comment
```

### Variables
```php
	$text = "Hello world!";


```

#### Static
```php
	// A static variable exists only in a local function scope, but it does not lose its value when program execution leaves this scope.
	function test(){
		static $a = 0;
		echo $a;
		$a++;
	}

```


#### $GLOBALS
```php

	$mess = 'hello';

	function a()
	{
	 	echo $GLOBALS['mess'];
	}
```


#### Constant varibale
```php

	define(name, 'Ali')
	// constants are automaticalyy global you can call it from funtion without global key.
```



### Data types
- string
- Integer
- Floot
- Boolean
- Array
- Object
- Null
- Resource

```php
	$text = 'text here';

	var_dump($text); // return the data type and value

```

### String methods
```php

	strlen('string'); // string length

	str_word_count('string');

	strrev('string'); // reverse string 

	strpos('string', 'g'); // search for a text within a string

	str_repeat('text', 10); // repeat the text

    str_replace('word', 'new_word', 'string with word');

```


### Number methods
```php
	PHP_INT_SIZE; // SIZE of intefer in bytes
	PHP_INT_MAX;
	PHP_INT_MIN;


	is_int();
	is_integer(); // alias of is_int()
	is_long(); // alias of is_int()

	is_float();

	is_finite();
	is_infinite();

	is_nan(2);

	is_numeric('399');

	// string to number
	(int) '333';
	(integer) '3333';
	intval('4ddd');
```


### Math methods
```php
	Pi();

	min(values);
	max(values);

	abs(number);
	sqrt(arg);

	round(val);

	rand(); // random numbers. rand(min, max);
```


### Operators

| type  | operator | operator | 
| ------------- | ------------- | ----|
| Arithmentic | + - * / % ** |
| Assignment | = += -= *= /= %= |
| Comparison | == === !== > < <= >= |  `not equal <>` `spaceship <=>`   |
| Increment / Decrement | ++$var $var++ $var-- --$var |
| Logical operators | and or xor && `||` ! |
| String operators | `connatenation of x,y` $x . $y | `append y to x` $x .= $y|
| Array | + == === != <> !== |
| Conditional assignment |`Ternary` $isOnline ? "yes" : 'No' ; |
| Conditional assignment | `Null coalescing`  $x = exp1 ?? exp2|


### if..else statements
```php
	if (condition) {
		// code...
	} elseif (condition) {
		// code...
	} else {
		// code
	}
```


### Switch
```php
	switch (variable) {
		case 'value':
			// code...
			break;
		
		default:
			// code...
			break;
	}
```

### loops
```php
	while (condition) {
		// code...
	}

	
	do {
		// code...
	} while (condition);


	for ($i=0; $i < ; $i++) { 
		// code...
	}


	foreach ($variable as $key => $value) {
		// code...
	}


	for ($i=0; $i < ; $i++) { 	
		break;
		continue;
	}
```


### functions
```php
	function FunctionName($value='') : string
	{
		// code...
	}
```


### Array
```php
	$cars = array('v2', 'v3');

	count($cars); // array length
```



#### Indexed Arrays
call by index
```php
	$cars = array('v2', 'v3');

	count($cars); // array length

	echo $cars[1];
```


#### Associative Array
named keys
```php
	$students = array("Peter"=> 40, "Ahmed" => 20);


	foreach ($students as $key => $value) {
		// code...
	}

	echo $students['Peter'];
```


#### Multdimensional Array
one or more array
```php
	$cars = array(
		array('ahmed', 13),
		array('ali', 20),
		array('Cocko', 23),
	);
```




#### Sort arrays
```php
	sort(array)
	rsort(array)

	// sort according to value
	asort(array)
	arsort(array)

	// sort according to key
	ksort(array)
	krsort(array)
```

### Super globals
- $GLOBALS
- $SERVER
- $REQUEST
- $POST
- $GET
- $FILES
- $ENV
- $COOKIE
- $SESSION

#### SERVER
hold information about 
> paths, script locations

```php
	$_SERVER['PHP_SELF'];
	$_SERVER['REMOTE_ADDR'];
	$_SERVER["REQUEST_METHOD"];
```

#### REQUEST
```php
 	$_REQUEST['fname'] // <input name=fname />

 	$_POST["fname"];

 	$_GET['']
```







### Regex
```php
	preg_match($pattern, $str) // 1 | 0

	preg_match_all($pattern, $str) // => how many time matches found

	preg_replace($pattern, "new word", $str);

	

```
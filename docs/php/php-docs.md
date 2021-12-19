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



### Form handling
```php
	htmlspecialchars('html code here'); // print save html

	trim();
	empty(var);

	stripslashes(str);

	filter_var($variable, FILTER-VALIDATE-EMAIL);

```



### Date and time
```php
	
	date('format', 'time stamp') 
	/**
	 * Format ====> 
	 	d 'day', m 'month', y 'year',
	 	l 'day of the week', H 'hours 24', h 'hours 12',
	    i 'minutes', s 'second', a 'am or pm'
	 * 
	 *@example 
	 * date('y-m-d') // return the current date|time
	 * 
	 * */


	date_default_timezone_set(timezone_identifier);
	date_default_timezone_get();

	$date = mktime('hour, minutes, second, month, day, year');

	date('y', $date); // get the year from spesific date using date()


	//Parse about any English textual datetime description into a Unix timestamp
	strtotime(); 
	
```



### Include files
```php
	require 'footer.php'; // script will stop if there any error

	include 'footer.php'; // if there any error will only produce a warning

```



### File handling
```php
	readfile('filename.txt');

	$file = fopen("filename.txt", 'mode')
	/**
	 * fopen() will create new file if it doesn't exist.
	 * 
	 * Mode ====> 
	 	r  'read only'
	 	w  'write only remove old content'
	 	a  'write only add at the last'
	 	x  'new file write only'
	 	r+ 'read/write'
	 	w+ 'read/write remove old content'
	 	a+ 'read/write add at the last'
	 	x+ 'read/write new file'
	 * */


	fread($file, filesize('file.txt'));

	fclose($file); // important

	fgets($file); // used to read single line after call it pointer move to next line.

	feof($file); // check if the end of the file has been reached

	fwrite($file, 'new text');
```




### Cookies

```php
	setcookie('cookie-name');
	/*

		setcookie(name, value, expire  'time to expire', path, domain, secure, httponly)

		// must be call before <html>

		// to delete cookies use the setcookie() with an expiration date in the past
	*/

	$_COOKIE['cookie-name'];
```



### Sessions

```php
	session_start() // must be the first thing in your document.

	$_SESSION['color'] = 'green';
	//session variables are not passed individually to each new page.

	session_unset() // remove all session

	session_destroy() // destroy the session
```




### Filter

```php
	filter_list()

	filter_var($var, 'type of check')
	/**
	 * type of check ===>
	 	FILTER_SANTIZE_STRING
	 	FILTER_SANTIZE_EMAIL_URL
	 	FILTER_SANTIZE_URL

	 	FILTER_VALIDATE_INT
	 	FILTER_VALIDATE_IP
	 	FILTER_VALIDATE_EMAIL
	 
	 * */
	
```




### Callback
Php support callback function
```php
	array_map(function () {}, $list);
```




### Json

```php
	json_encode('value') // object|array to json

	json_decode("{'name': 'json'}") // json to object|array
	/**
	 * return object by default
	 * if you set second paramst to true it will return 'Array associative'
	 * 
	 *@example json_decode("{'name': 'json'}", true);
	 * */
```





### Php Exceptions

```php

	throw new Exception('Error message');


	try {
		
	} catch (Exception $e) {
		
	} finally {

	}
```



## OOP
A class is a template for objects, and
an object is an instance of a class.

```php
	/**
	 * 
	 */
	class Fruit
	{

		public $name;

		function __construct($name)
		{
			// code...
			$this->name = $name;
		}

		public function set_name($name)
		{
			$this->name = $name;
		}

	}

	$apple = new Fruit('Apple');

	$apple->set_name('Red Apple');

	$apple->name = 'Green Apple';


	$apple instanceof Fruit // 0 | 1
```

### Destructor
funtion will automatically called at the end of the script.

```php
	class Cars
	{
		function __destruct()
	    {	
	      echo 'done';
	    }
	}
```


### Access Modifiers

```php
	class Cars
	{
		public $name; // accessed from every where

		protected $age;	// accessed whithin the class and by classes derived from that class.

		private $number; // accessed within the class

	}
```



### Inheritance
```php
	class Fruit {}
	
	class Strawberry extends Fruit {

	}

	final class Cars {} // prevent class inheritance to prevent method overriding
```



### Class constants

use `self::` to access const variables.

`::` called `scope resolution operator`

```php
	class Fruit {
		const BYE_MESS = 'Bye bro';

		public function byebye() 
		{
			echo self::BYE_MESS;
		}
	}
```



### Abstract Class
Abstract classes and methods are when the parent class has a named method, but need its child `class(es)` to fill out the task.

```php
 	abstract class Fruit {
 		abstract function set_name():string;
 	}
```



### Interfaces

Allow you to specify what methods a class should implement.

>	whene one or more classes use the same interface it is referred to as `polymorphism`

```php
 	interface ChatInterface {
 		public function mess():string;
 	}

 	class Chat implements ChatInterface {}
```



### Traits
Declare methods that can be used in multiple classes.

- Can have methods or abstract method
- Can have any access modifier `public` `private` `protected`

```php
 	trait Auth {
 		public function mess():string;
 	}

 	class Chat {
 		use Auth;
 	}
```



### Static methods
Static methods can be called directly,
without creating an instance of the class.


```php
 	class User {
 		public static function get_name () {}

 		public function get_names() {
 			self::get_name(); // access static method
 		}
 	}

 	User::get_name();


 	// access static method from child class.
 	class Admin extends User {
 		function sayHi() {
 			parent::get_name();
 		}
 	}
```



### Static Properties

```php
 	class User {
 		public static $name = 'User Name here';

 		public function get_names() {
 			self::get_name(); // access static method
 		}
 	}

 	User::$name;
```

use `self::` to access static properties inside methods.
use `parent::` if you want to access it in child class.



### Name Spaces
They allow for better oraganization by grouping classes
that work together to perform a task.

- They allow the same name to be used for more than one class.
- A `namespace` must be the first things in the php file.

```php
 	namespace Auth;

 	class Login {}
```

To access classes from outside a namespace
the class needs to have the namespace attached to it.

```php
	$Login = new Auth\Login() // class inside Auth.
```


### php Iterables.
Is any value which can be looped through with a foreach()



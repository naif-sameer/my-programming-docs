# larvale docs

## install

```bash
	composer create-project laravel/laravel example-app

# if you want to create a Git repository
	laravel new example-app --git

```



## serve the application
```bash 
	php artisan serve			
```



## working with .env file
> Laravel's .env file contains configuration values. These values are then retrieved from various Laravel configuration files within the config directory using Laravel's `env` function.

```php
	env('SERVER_NAMW', 'default value here')

```

> The second value passed to the env function is the "default value". This value will be returned if no environment variable exists for the given key.



## print to the page
```php
print_r($id); # var or array to print it on the page;
```



## route
> The web.php file contains routes that the RouteServiceProvider places in the web middleware group, which provides session state, CSRF protection, and cookie encryption. If your application does not offer a stateless, RESTful API then it is likely that all of your routes will most likely be defined in the web.php file.

> The api.php file contains routes that the RouteServiceProvider places in the api middleware group. These routes are intended to be stateless, so requests entering the application through these routes are intended to be authenticated via tokens and will not have access to session state.

```php

Route::get('/', funciton() {
})


# route to send res
Route::get('/users', funciton() {

	// blade templates 
	return view('users');

	// string
	return 'users page ';

	// laravel auto convert arry to json
	return ['user 1', 'user 2'];

	// res a json obj
	return response()->json([
		'name'=> 'ali',
		'age'=> 30,
	]);

	// function
	return redirect('/home');
})


# working with controller *new in laravel 8*
Route::get('/home', [NameController::class, 'index']);

# or

Route::get('/home', 'App\Http\Controller\NameController@index')


# ---------- old laravel syntax before 8 not woking anymore ------

Route::get('/home', 'HomeController@index');


```


### Route Parameters

```php
# route file
Route::get('/home/{id}', [HomeController::class, 'show']);

# controller file
class HomeController extends Controller {
	public function show($id) {
		return $id;
	}
}

#--------- make the user only input the id as an integer -------
# using where method

Route::get('/home/{id}',
 [HomeController::class,
 'show'])->where('id', '[0-9]+');

# where method on multiple routes
Route::get('/home/{name}/{id}',
	[HomeController::class,'show'])
	->where(['name' => '[a-z]+', 'id' => '[0-9]+']);
```


### Named Routes
```php
Route::get('/home', [HomeController::class, 'index'])->name('home');
```


### routes with resource

```php

# web.php
use App\Http\Controller\HomeController;

Route::resource('/', HomeController::class);


# HomeController.php
class HomeController extends Controller {
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        dd(Test::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $req)
    {
        return view('form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        return '{done: true}';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return 'test show' . $id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return 'test edit ' . $id;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $arr = [$request->all(), $id];
        return json_encode($arr);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return 'test destroy ' . $id;
    }

}	

```

### routes *Accessing the request*

```php
public function store(Request $request)
    {
    	$request->validate([
    		'username'=> 'required|unique:users',
    		'name'=> 'required',
    		'age'=> 'required|integer|min:0|max:100',
    	]);

        return '{done: true}';
    }


# in the view file
    @if ($errors->any())
    	<div>
    		@foreach ($errors->all() as $error) 
    			<div>
    				{{$error}}
    			</div>
    		@endforeach
    	</div>
    @endif
```

#### add new rule

```bash
php artisan make:rule Uppercase

```

```php

# rule file	
class Uppercase implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return strtoupper($value) === $value;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute must be Uppercase';
    }
}



# valuidate funtion 
$request->validate([
	name-> new Uppercase;
])


```


#### form requests

```bash
php artisan make:request CreateVaildate
```

```php 

# request file
class CreateValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
			'name'=> 'required',
			'age'=> 'required|min:10|max:50',        ];
    }
}


# use the function

public function index(CreateValidation $request) {
	$request -> validate();
}

```



#### images upload
```php
public function index(Request $request)
{
	$request->validate([
		'image'=> 'required|mimes:jpg,png,jpeg|max:5046' # max in kilobites
	])


	# methods we can use on $request
	$request
		->file('image')
			->gussExtension() # return file extension ex.. jpeg
			->getMimeType() # return file mime type ex.. image/jpeg
			->store()
			->asStore()
			->storePublickly()
			->move()
			->getClientOriginaName()
			->getClientMimeType()
			->getSize()
			->getError()
			->isValid()

		->image
			->move(public_path('img'), 'images name here');
}

```





## The Http Directory

> The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to handle requests entering your application will be placed in this directory.



## Artisan command
```bash
# change serve port
php artisan serve --port=8081


#----- artisan make: -----
php artisan make:controller NameController


# to create methods automaticly
php artisan make:controller NameController --resource


# To view the available commands,
php artisan list


# Remove the compiled class file    
php artisan clear-compiled


php artisan down

php artisan Uppercase


php artisan help


# Cache the framework bootstrap files
php artisan optimize


php artisan cache:clear


php artisan auth:clear-resets

php artisan key:genrate

# create session magration file
php artisan session:table



php artisan view:clear

```



## working with View

```php
# ------------------- working with file path ----------
/**
 * if you have file like this; 
 *	view/
 * 		products/
 * 			index.blade.php 
 */

# you can user point
view('products.index');


# ------------------- send data to view file ----------

# compact method
	$name = 'some ble here';
	view('home', compact('name'));

# With method
	$title = 'Hello every one on my chanel'
	view('home')->with('title', $title);

# Directly in the view 
	view('home', [
		'name'=> 'value'
	]);

```



## Blade template

```php
/**
 * 
 * create a folder called *layouts*
 * 
 * */

/**

*parent*
	<header /> 

	@yiled('content')

	<footer />

*child*
	@include('layoust.file-name')

 	@section
		<div> you content here </div>
 	@endsection
 
*/

#----------- active class -------------
# add active class to link
 <a class='{{ request()->is('/') ? 'active' : '' }}'>Home</a>

# add active class to link on nested route
<a class='{{ request()->is('home/*') ? 'active' : '' }}'>Home</a>


#----------- Public image -------------
# you must have the images on the public folder;
<img src="{{ URL('images/icon-box.jpg') }}" />
# or
<img src="{{ asset('images/icon-box.jpg') }}" />


# if you need to secre the images use *storage* folder
/**
	php artisan storage:link

	# next step you need to move your images to storage folder
*/


#----------- if -------------

@if()

@elseif ()

@else 

@endif

#--- unless != if
@unless (false)
	<div>this will show when the condition is false </div>
@endunless


#----------- empty -------------
@empty($name)

@endempty()

#----------- isset -------------
@isset($var_name)
	
@endisset


#----------- comparing multiple possible conditions -------------
@switch($name)
	@case ('ali'):
		// code...
		@break;
	
	@default:
		// code...
		@break;
@endswitch


#----------- loops -------------

# loop and check if the item array is empty 
@forelse ($names as $name)
	# <div> {{ $name }} </div>
@empty 
	# <h3>there no names</h3>
@endforelse

```



## working with assets

```php

# laravel frontend presets

```



## Databases & migrations

### database

```bash
php artisan migrate


# restart
php artisan migrate:reset


# Reset and re-run all migrations
php artisan migrate:refresh


# Show the status of each migration
php artisan migrate:status
 

# you can quickly apply new schmea 
php artisan migrate:fresh


#create table [use make:model insted of this]
php artisan make:migration create_propject_table


# create new model with factory
php artisan make:model --factory File_name



```

> *on the migration folder* up funtion mean to create the table
down() mean to clean what you do before.

```php
public function up()
{
	Schema::create('posts', function (Blueprint $table) {
		$table->increments('id');
		$table->string('title');
		$table->mediumText('body');
		$table->timestamps(); #the time when the post is created
	});
}

```

### factory
> add fake data to your dbs

```bash
php artisan make:factory PostFactory
```

```php
# add Post model and call factory from it
Post::factory()->count(1)->create();

```


### Query builder

```php
# non fluent [not good]
DB::select(['table'=> 'posts'], 'where'=> ['id'=> 1])


# Fluent [good]
DB::table('posts')->where('id', 1)->get();


# select query
$post = DB::select('select * from posts');


# select and where query 
  
$post = DB::select('select * from posts where id = :id',
		 ['id'=> 2]);


# using methods
$id = 3;
$post = DB::table('posts')

	->where('id', $id)

	->where('id', '!=', 40) # where with operators

	->orWhere('body', 'bla bla')

	->whereBetween('id', [5,10])

	->whereNotNull('title')

	->whereRaw('body') # not good to use it

	->select('title') # select column

	->distinct() # get unique value used with select

	->orderBy('title', 'asc')

	->latest() #Add an "order by" clause for a timestamp to the query.

	->oldest()

	->inRandomOrder()


#------------- get methods ----------

	->count() #Retrieve the "count" result of the query.

	->min(':id')
	->max(':id')
	->sum(':id')
	->avg('id');

	->first()

	->find(3) # Execute a query for a single record by ID.

	->get();


#------------- wokring with the data methods ----------


	->insert([
        'title'=> 'hello world',
        'body'=> 'hi every one this is my first db query',
	])


	update([
		'title' => 'new title',
		'body'=> 'fresh body content'
	]) # return 1 if updated or 0 if not updated

	
	->delete('55') # return init count of how much deleted item


DB::table('posts')->select('title')->get();
```


### Eloquent
> why --> simplisity

```php

# test.php model file

class Test extends Model {
	use HasFactroy;

	protected $table = 'test';


	protected $primaryKey = 'id'; # column | false


	protected $timestamps = false; # true


	protected $dateFormat = 'h:m:s';


	protected $hidden = ['password','update_at'];


	protected $visible = ['name', 'username'];


	#protected $ = 'test';
}


# TestController.php
use App\Model\Test;

class TestController extends Controller {
	public function index()
	{
		# SELECT * FROM test
		$test = Test::all()

				Test::where()
					->get();

					-> count();

					->firstOrFail();

				
				Test::chunk('amout of rows', funciton($cars) {
						// code here
				});
	}

	public function store(Request $request)
	{

		# first way
		$test = new Test();
		$test->name = $request->input('name');
		$test->desc = $request->input('desc');
		$car->save();


		# another way 
		Test::create([
			'name'=> $request->input('name'),
		]);

		## you need to add this line in your model file 
		/***
		 	protected $filelable = ['name']; 
		 */

		return redirect('/test');
	}	


	 public function update(Request $request, $id)
    {

        Test::where('id', $id)
        	->update([
            	'name'=>$request->input('name')
        	]);

        return redirect('/test');

    }

    public function destroy(Test $test)
    {
        $test->delete();
        return redirect('/test');
    }
}

```


### Eloquent serialization

```php

public function index()
{
	$test = Test::all()

		->toArray(); #collection to array

		->toJson() // for api

}
```


#### Eloquent one to many

```php
# migrations file

public function up () {
	Schema::create('cars', function (Blueprint $table) {
		$table->increments('id');
		$table->string('name');
		$table->longText('description');
		$table->timestamps();
	})

	Schema::create('car_models', function (Blueprint $table) {
		$table->increments('id');
		$table->unsignedInteger('car_id');
		$table->string('model_name');
		$table->timestamps();
		$table->foreign('car_id')
			->references('id')
			->on('cars')
			->onDelete('cascade') # || 'set null'

	})
}

# test model
class Cars extends Model
{
	
	public function carDodels()
	{
		return this->hasMany(CarModel::class);
	}

	public function headquarter()
	{
		return this->hasOne(Headquarter::class);
	}

}

```

#### Many to many
```php


```



## Authentication & Authorization

*Authentication*
> Verrifying who someone is, and allowing them to act as that person in your sestem


*Authorization*
> Determining whether the authenticated user is allowed (authorized) to perform a specific behavior.

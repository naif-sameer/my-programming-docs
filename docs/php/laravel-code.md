

## Creating Policies

```bash
php artisan make:policy UserPolicy --model=User
```


## spatie perimission middleware

```php
function __construct()
    {
        $this->middleware('Permissions:role-list', ['only' => ['index']]);
        $this->middleware('Permissions:role-create', ['only' => ['store']]);
        $this->middleware('Permissions:role-edit', ['only' => ['update']]);
        $this->middleware('Permissions:role-delete', ['only' => ['destroy']]);
    }
```



## laravel  api Exception handler

### NotFoundHttpException
[docs](https://laravel.com/docs/8.x/errors#rendering-exceptions)
```php
 $this->renderable(function (NotFoundHttpException $e, $request) {
        if ($request->is('api/*')) {
            return response()->json([
                'message' => 'Record not found.'
            ], 404);
        }
    });

```

# laravel-php.md

## Laravel PATCH and PUT Request Does not Working with JS form-data

This is a known issue and the workaround suggestion as per the following Github comment is that when sending a PATCH / PUT requests you should do the following.

:: info
You should send POST and set \_method to PUT (same as sending forms) to make your files visible
::

[source](https://stackoverflow.com/a/50691997/19299063)

## SQLSTATE[23000]: Integrity constraint violation: 4025 CONSTRAINT

if you save non-json into `$table->json('my-column')` field this error occurred like this:

```php
Address::create([
  "name"=>json_encode($request->input('name'))
]);
```

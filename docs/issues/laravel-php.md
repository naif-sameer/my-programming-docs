# laravel-php.md

## Laravel PATCH and PUT Request Does not Working with JS form-data

This is a known issue and the workaround suggestion as per the following Github comment is that when sending a PATCH / PUT requests you should do the following.

:: info
You should send POST and set \_method to PUT (same as sending forms) to make your files visible
::

[stackoverflow](https://stackoverflow.com/a/50691997/19299063)

GET|HEAD  | test          | test.index \Controllers\TestController@index

POST      | test         | test.store   | App\Http\Controllers\TestController@store

GET|HEAD  | test/create  | test.create  App\Http\Controllers\TestController@create               

GET|HEAD  | test/{test}  | test.show    | App\Http\Controllers\TestController@show

PUT|PATCH | test/{test}  | test.update  | App\Http\Controllers\TestController@update

DELETE    | test/{test}  | test.destroy | App\Http\Controllers\TestController@destroy

GET|HEAD  | test/{test}/edit| test.edit    | App\Http\Controllers\TestController@edit

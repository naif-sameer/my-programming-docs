what is REST?

> **Re**presentational **S**tate **T**ransfer

Put

> if you want to replace all data of a specific resource.

PATCH

> Whenever you want to update or modify a part of your request.

## Status Range

### 2xx

> tells the client a request was successful

#### 200

> means ok

#### 201

> Created

#### 204

> No content

### 3xx

> Tesll the client about redirections

#### 301

> moved permanently

#### 307

> temporary redirect

#### 308

> permanent redirect

### 4xx

> tells the client that there has been an error

#### 400

> bad request
> server only tells that rhe request can't be processed

#### 401

> Unauthorized

#### 403

> forbidden

#### 404

> Not found

#### 405

> Method not allowed
> when you perform a GET when it expects a POST

#### 422

> unprocessable entity
> Invalid data has been sent

### 5xx

> Statuses that deal with the server

#### 500

> Internal Server error

#### 501

> Not implemented
> Server does not know how to handle the request Might be available in the future

#### 502 Bad gateway invalid response

#### 503 service unavailable down for maintenance

#### 504 Gateway timeout

## Json api specifications

```js
{
	"id": 1,
	"type": "books",
	"attributes": {
		"name": "Hi new year",
		"publication_year": 2010
	},
	/**
	 * Relationships members
	 * - Links
	 * 	 - Self
	 * 	 - Related
	 * - Data
	 * - Meta
	 *
	 * */
	"relationships": {
		// data
		"data": [
			{
				"id": 1,
				"name": "bla"
			},
			{
				"id": 1,
				"name": "bla"
			}
		],

		/**
		 * - Pagination
		 * 	- first
		 * 	- last
		 * 	- prev
		 * 	- next
		 */
		"links": {
			"first": "example.com/books?page=1",
			"last": "example.com/books?page=10",
			"prev": 0,
			"next": "example.com/books?page=2",
		}
	}

}

```

## setup laravel passport

```bash
composer require laravel/passport

# run passport
php artisan migrate
php artisan passport:install

```

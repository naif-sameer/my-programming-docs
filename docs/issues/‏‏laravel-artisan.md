# laravel-artisan.md

## Route cache during development. (without artisan optimize or cache : clear)

Just run artisan `route:clear` then leave it alone?

The routes are only cached when you run `route:cache` or `optimize`

You DO NOT need to mess with the cache drivers.

ONLY run `route:cache` or `optimize` as part of a production deployment script

[link](https://laracasts.com/discuss/channels/laravel/how-to-disable-route-cache-during-development-without-artisan-optimize-or-cache-clear?page=1&replyId=664664)

# TOken based authentication

## JWT (Json web tokens)

-   Header
    -   type (JWT)
    -   Hashing algorithm
-   Payload
    -   info we're transmitting
    -   ex: iss, exp, permissions
-   Signature
    -   Hash of: header + payload + secret

### Logout

**Tips**

> when user logout instead of clear all store state manually you can use
> `location.reload();`
> to clear all the data .

### Handle http 401 error (authentication error)

```js
// router.js file

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user');

    if (to.matched.some((record) => record.meta.requiredAuth) && !loggedIn) {
        if () next('/login');
    } else next();
});
```

### Automatic login

```js
// App.vue
onMounted(() => {
    const userData = localStorage.getItem('use');
    if (userData) {
        authStore.setUserData(JSON.parse(userData));
    }

    // authentication security check
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) authStore.logout();

            return Promise.reject(error);
        }
    );
});
```

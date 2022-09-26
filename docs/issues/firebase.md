# firebase.md

## account-exists-with-different-credential



```
To provide context, distinct emails have their own Identity Providers. If a user has an email of sample@gmail.com, the IDP (identity provider) for that email will be Google, as specified by the domain, @gmail.com (this won't be true to an email whose domain is @mycompany.com or @yahoo.com).

Firebase Authentication allows sign-ins to happen when it detects that the provider used is the email's IDP, regardless of whether they're using the setting 'One account per email address' and have signed in with a previous provider, such as Email/Password based authentication or any federated identity providers such as Facebook. That means that if they signed in sample@gmail.com with Email and password, then Google, (under One account per Email address setting), Firebase will allow the latter and the account's provider will be updated to Google. The reason for this is that the IDP will most likely have the most up-to-date information about the email.

On the other hand, if they sign-in with Google at first and then sign in with an Email and password account with the same associated email, we wouldn't want to update their IDP and will continue with the default behavior of notifying the user that is already an account associated with that email.
```

[source](https://stackoverflow.com/questions/44015751/firebase-js-api-auth-account-exists-with-different-credential#:~:text=What%20is%20happening%20is%20that,with%20either%20Google%20or%20Facebook.) 
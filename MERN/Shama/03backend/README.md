Use `yarn dev`

### Important for /server/controllers/auth.controller.js:

```
const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth',
  algorithms: ['RS256']
})
```

Algorithms property must be set.

### Test 'post' on Postman:

http://localhost:3000/api/users/
Change to POST.
Click 'Body'.
Click 'raw'.
Choose 'JSON'.
Fill in the data as required in your models (name, email, password).
Don't forget to use double quote.

### Fetch single user on Postman:
GET
http://localhost:3000/api/users/<userID>
* for example:
http://localhost:3000/api/users/61cd7acf8fa9e3c97172108e

### Sign in on Postman:
http://localhost:3000/auth/signin
POST.
Click 'Body'.
Click 'raw'.
Choose 'JSON'.
Fill in email and password.

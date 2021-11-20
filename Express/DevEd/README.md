## Test 'post' on Postman:

http://localhost:3000/posts/
Change to POST
Click 'Body'
Click 'raw'
Choose 'JSON'
Fill in the data as required in your models
Don't forget to use double quote


## Test fetch from browser (i.e.: codepen):

Make sure you have install cors.
In JS window:

```
fetch('http://localhost:3000/posts/')
.then(result => {
  return result.json()
})
.then(data => {
  console.log(data)
})
```

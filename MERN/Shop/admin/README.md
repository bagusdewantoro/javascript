Box Shadow Generator = html-css-js/css/generator/box-shadow/

Change port:
```
"scripts": {
  "start": "set PORT=3002 && react-scripts start",
  ...
},
```

Adding environment variables:
https://create-react-app.dev/docs/adding-custom-environment-variables/#referencing-environment-variables-in-the-html
* variable name should start with REACT_APP_
* during development, app must be restarted after adding new variable

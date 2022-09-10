When this happen:

```
Plugin "react" was conflicted between "package.json » eslint-config-react-app
```

Simply check the case in powershell (check lowercase or uppercase).

Make sure:
`C:\Users\octavianus.bagus\Documents\JavaScript\MERN\Shop\client`

Change port:
```
"scripts": {
  "start": "set PORT=3001 && react-scripts start",
  ...
},
```

Adding environment variables:
https://create-react-app.dev/docs/adding-custom-environment-variables/#referencing-environment-variables-in-the-html
* variable name should start with REACT_APP_
* during development, app must be restarted after adding new variable

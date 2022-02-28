* If you want to change entry point from App.js to Home.js

In package.json, change from:
```
"main": "node_modules/expo/AppEntry.js"
```
to:
```
"main": "Home.js"
```
In Home.js, we are not going to use export default, but:
```
import { registerRootComponent } from 'expo';
...
const Home = () => {
  ...
}
...
registerRootComponent(Home);
```

* To access each learning directory:

In package.json, edit the "main" to:
```
"main": "01_button,touch/App.js"
```
Don't forget to use registerRootComponent from expo.

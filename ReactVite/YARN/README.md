## Vite, Yarn, Antivirus
When using yarn and ```[plugin:vite:esbuild] The service is no longer running```  disable antivirus (i.e. smadav)

## Source
* Firebase Upload Image
https://blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/
* Preview Image client react
https://blog.logrocket.com/using-filereader-api-preview-images-react/

## env Variables in Vite
The environment variable name used in code must match the name set in the .env file.
Begin with VITE_ and import using 'import.meta.env.VITE_'

```
// .env
VITE_API_KEY=abcd1234
   👆
// firebase.js
const firebaseConfig = {      👇
  apiKey: import.meta.env.VITE_API_KEY,
  ⋮
}
```

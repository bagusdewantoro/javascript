## Live Preview

### Expense Tracker
* Based on Vanilla JS version by Travery, I created react version.
>#### Without storage
>#### [src/expense1Basic](https://expense-basic.netlify.app/).  
>#### Local Storage
>#### [src/expense2Local](https://expense-local-storage.netlify.app/).  

<br/>

### Random Color Generator
* Two versions: Hook & Class

>#### [src/colorHook](https://react-colorhook.netlify.app/).  
>#### [src/colorClass](https://react-colorclass.netlify.app/).  

<br/>

### To do app by Tania Rascia

>#### [src/ToDoProps](https://react-tania-todoprops.netlify.app/).
>#### [src/ToDoStateDelete](https://react-tania-statedelete.netlify.app/).
>#### [src/ToDoStateAdd](https://react-tania-stateadd.netlify.app/).
>#### [src/ToDoFinal](https://react-tania-todo.netlify.app/).   

<br/>

### HOPE - on progress

>#### [src/hope](https://react-hope.netlify.app/).   

<br/>

### Tracker app by Brad Traversy

>#### [src/tracker1-props](https://react-traversy-props.netlify.app).
>#### [src/tracker2-style](https://react-traversy-style.netlify.app).
>#### [src/tracker3-events](https://react-traversy-events.netlify.app).
>#### [src/tracker4-map](https://react-traversy-map.netlify.app).
>#### [src/tracker5-state](https://react-traversy-state.netlify.app).
>#### [src/tracker6-stateEvents](https://react-traversy-stateevents.netlify.app).
>#### [src/tracker7-deleteTask](https://react-traversy-deletetask.netlify.app).
>#### [src/tracker8-styleCond](https://react-traversy-conditional.netlify.app/).
>#### [src/tracker9-addTask](https://react-traversy-addtask.netlify.app/).
>#### [src/tracker10-formToggle](https://react-traversy-formtoggle.netlify.app/).
>#### [src/tracker11-buttontoggle](https://react-traversy-buttontoggle.netlify.app/).



* Development server for production (build) version:
```
npm run build
npm i -g serve
```
```
serve -s build
```
or to chose port:
```
serve -s build -p 8000
```

* Create a mock RestAPI with our onw data using json-server:
```
npm i json-server
```
package.json:
```
"scripts": {
  ...
  "server": "json-server --watch db.json --port 5000"
},
```
```
npm run server
```
While server is running, open new shell:
```
npm start
```
Open db.json and edit its content as you like.
For example:
```
{
  "tasks": [
    {
      "id": 1,
      "text": "Shopping",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Study",
      "day": "Feb 7th at 5:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Playing",
      "day": "Jan 1st at 1:30am",
      "reminder": true
    }
  ]
}
```
You can check it in http://localhost:5000/tasks
If accessing each tasks, add its id http://localhost:5000/tasks/1
And update app.js using useEffect

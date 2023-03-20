* From https://codepen.io/psionski/pen/LoapJo

## Typescript

* Install Typescript 
```
npm i typescript
```

* Compile Typescript to JS
```
npx tsc main.ts
```


## Code
- Final result is main.js
- Learning mode, add 'Progress[number]' by commenting code from main.js
- Final for the progress: copy 'Progress[number]', then add 'clean'. Delete rows of the codes that have comments.

### Progress:
- Progress1 = Show dot based on cursor position (onmousemove). State = "Nothing"
- Progress2 = Change state to "AddingPoints" when clicked, get coordinate (onmouseup)
- Progress3 = Collect dot coordinate in an array, so we can draw lines after each click. 
- Progress4 = Snap to first vertex, close current shape, and create new shape.

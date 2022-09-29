## PART I | Top Level Await

Below node 14.8, to use top level await, you should flag '--harmony-top-level-await' and module type, so in your package.json:

```
"type": "module",
"scripts": {
  "start": "nodemon --harmony-top-level-await index.js"
},
```

## PART II | Learn Mongoose Directly From NODE REPL (Powershell)

* Basic Setup
```
npm init -y

npm i mongoose express
```

* Run node repl
```
node
```

```
app.get('/', (req, res) => {
  res.send('We are at home');
});

mongoose.connect(
  'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/belajar?retryWrites=true&w=majority',
  () => app.listen(3000, () => console.log('server running'))
);
```
You should see 'server running'.

* Create Basic Model
```
const belajarSchema = mongoose.Schema({
  title: String,
  age: Number
});

const belajar = mongoose.model('belajars', belajarSchema);
```
Open mongodb atlas. You should see your models

* Create first data
```
const belajar1 = new belajar({
  title: 'bagus', age: 35

console.log(belajar1)
```
Now save to database
```
belajar1.save()
```
Reload your mongodb atlas. Boom! The data has been stored!

* Create second data
```
const belajar2 = new belajar({
  title: 'bondan', age: 32

console.log(belajar2)
belajar1.save()
```

* Delete data by its ID
```
belajar.findByIdAndDelete('insert one of id').exec()
```

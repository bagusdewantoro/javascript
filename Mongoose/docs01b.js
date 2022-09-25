const mongoose = require('mongoose');


const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

const kittens = Kitten.find();
// console.log(kittens);

mongoose.connect('mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/docs?retryWrites=true&w=majority', () => console.log('connected to DB'));

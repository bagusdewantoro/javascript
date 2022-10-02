import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/docs?retryWrites=true&w=majority');
// mongoose.connect('mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/docs?retryWrites=true&w=majority', () => console.log('connected to DB'));

// Shorthand
const { Schema, model, connection } = mongoose;

// Check our list of collections' name
// connection.on('open', function (ref) {
//   try {
//     console.log('Connected to server. List of collections:');
//     // Get list of collections
//     connection.db.listCollections().toArray(function (err, coll) {
//       coll
//       .map(obj => {
//         console.log(obj.name) // list of collections name
//       })
//     });
//   } catch(e) {}
// })


/**
 * Defining a schema with automatic _id
 */

const schema1 = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  },
});
// console.log(schema1)


/**
 * Creating a model
 */

const Blog = model('Blog', schema1);
console.log(`Our Blog model: ${Blog()}`)
/* Blog: {
  _id: new ObjectId("6335bac23ceecd1b6eb49512"),
  comments: [],
  date: 2022-09-29T15:33:22.764Z
} */


/**
 * Change _id
 */

const schema2 = new Schema({ _id: Number });
const model2 = model('model2', schema2);
const doc2 = new model2();
const addDocumentDoc2 = async () => {
  // Delete all existing model2 documents
  await model2.deleteMany()
  // ==== without top level await:
  // (async () => {
  //   try {
  //     doc2._id = '1';
  //     await doc2.save();
  //   } catch {}
  // })()
  // ==== with top level await:
  console.log(`doc2 before: ${doc2}`) // doc2 before: {}
  doc2._id = Math.floor(Math.random() * 1000);
  await doc2.save();
  // console.log(`doc2 after: ${doc2}`) // doc2 after: { _id: "random number", __v: 0 }
}


/**
 * Define our own custom instance method
 */

// Define a schema
const animalSchema = new Schema(
  { name: String, type: String, },
  {
    methods: {
      // Our custom method
      findSimilarTypes(cb) {
        return model('Animal').find({ type: this.type }, cb);
      }
    }
  },
)

// Now our animal instances have a "findSimilarTypes" method available for them
const Animal = model('Animal', animalSchema);
// Delete all existing Animal documents
await Animal.deleteMany()
const dog = new Animal({ type: 'dog' });
await dog.save();
// await dog.methods.findSimilarTypes((err, dogs) => console.log(dogs))


/**
 * Option: Change versionKey
 */

const Thing = model('Thing', new Schema({ name: 'string' }, { versionKey: '_versiBagus' }));
// Delete all existing Thing2 documents
await Thing.deleteMany()
const thing = new Thing({ name: 'Test Versioning'});
await thing.save();
// Other way WITHOUT declare const
// await new Thing({ name: 'Test Versioning'}).save()
console.log(`thing document: ${thing}`)
/* {
  name: 'Test Versioning',
  _id: new ObjectId("6335c5d47ba781ebc93e88f5"),
  _versiBagus: 0
} */


/**
 * Option: Timestapms
 */

//  With custom name for 'createdAt' fields
const Thing2 = model('Thing2', new Schema({ name: 'string' }, { timestamps: { createdAt: 'dibuat_pada'}}));
// Delete all existing Thing2 documents
await Thing2.deleteMany()
const thing2 = new Thing2({ name: 'Test Timestamps' });
await thing2.save();
console.log(`thing2 document: ${thing2.dibuat_pada}`)


/**
 * Setting to prompt user from CLI ==========================================
 */

import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. To choose whether we will create new model2 in "change _id" section:
rl.question('Do you want to add new model2 document (y/n) ? ', answer => {
  if (answer === 'y') {
    addDocumentDoc2();
    console.log(`You typed ${answer}, so the new model2 document is added`);
    console.log(`The new model 2 document is : ${doc2}`); // { _id: "random number" }
  } else {
    console.log(`You typed ${answer}, so no new model2 is added`);
  }

  // 2. To get your name
  rl.question('your name is ', name => {
    console.log(name)
    rl.close();
  })
});

rl.on('close', () => {
  console.log('--selesai--')
  process.exit(0);
});
// ========================================================================

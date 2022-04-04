
module.exports = {
  // notes: () => notes, // using dummy data
  notes: async (parent, args, { models }) => await models.Note.find(), // fetch from database cloud
  // note: (parent, args) => {
  //   return notes.find(note => note.id === args.id); // using dummy data
  // }
  note: async (parent, args, { models }) => await models.Note.findById(args.id),
}

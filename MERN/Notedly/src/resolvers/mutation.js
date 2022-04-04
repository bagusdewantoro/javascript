
module.exports = {
  // 1. Using dummy data:
  // newNote: (parent, args) => {
  //   let noteValue = {
  //     id: String(notes.length + 1),
  //     content: args.content,
  //     author: 'Adam Scott'
  //   };
  //   notes.push(noteValue);
  //   return noteValue;
  // }
  // 2. Fetch from database cloud:
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: 'Adam Scott'
    });
  }
}

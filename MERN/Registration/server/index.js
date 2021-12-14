import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/user.js';

const app = express();

app.use(express.json());
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});


const CONNECTION_URL = 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/registration?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`sukses di port ${PORT}`)))
  .catch((error) => console.log(error.message));

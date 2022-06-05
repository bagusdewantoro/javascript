const app = require('express')();
const json = require('express').json();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

app.use(cors());
app.use(json);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

mongoose.connect(process.env.cloudDB)
  .then(() => app.listen(process.env.PORT, () => {
    console.log(`Database and Server is running at ${process.env.PORT}`)
  }))
  .catch(err => console.log(err))

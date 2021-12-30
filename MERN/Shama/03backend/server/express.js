import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

//comment out before building for production
// import devBundle from './devBundle'
// devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// serve the template
import Template from './../template';
app.get('/', (req, res) => {
  res.status(200).send(Template())
});

// user CRUD API routes
import userRoutes from './routes/user.routes';
app.use('/', userRoutes);

// user auth and protected routes
import authRoutes from './routes/auth.routes';
app.use('/', authRoutes);

// auth error handling for express-jwt
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  } else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
});

export default app;

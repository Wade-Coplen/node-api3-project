const express = require('express');
const helmet = require('helmet')
const server = express();

const userRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');
//built-in
server.use(express.json());

//3rd party
server.use(helmet());
// server.use(morgan('dev'));
//----custom-----
server.use(loggerMethod);
server.use(loggerUrl);
server.use(loggerTimeStamp);
server.use(validateUserId);
server.use(validateUser);
server.use(validatePost);
//================================
server.use('./api/posts', postsRouter);
server.use('./api/users', userRouter)
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function loggerMethod(req, res, next) {
  console.log(`${req.method} Request`);
  next();
}
function loggerUrl(req, res, next) {
  console.log(`${req.url} Request`);
  next();
}
function loggerTimeStamp(req, res, next) {
  console.log(`${req.timestamp} Request`);
  next();
}
//validateUserId()
function validateUserId(req, res, next) {
  const userId = req.id;
  if(userId) {
    req.user = userId;
  } else {
    !userId;
    res.status(400).json({messge: 'invalid user id'})
  }
  next();
}
//validateUser()
function validateUser(req, res, next) {
  const body = req.body;
  const name = req.body.name;
  if(!body) {
    res.status(400).json({message: 'missing user'})
  } else {
    body !== name;
      res.status(400).json({message: 'missing required name field'})
  }
  next();
}
//validatePost()
function validatePost(req, res, next) {
  const body = req.body;
  const text = req.body.text;
  if(!body) {
    res.status(400).json({message: 'missing post data'});
  }
}
//
module.exports = server;
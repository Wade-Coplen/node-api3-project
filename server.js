const express = require('express');
const helmet = require('helmet')
const server = express();

const userRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');
//built-in
server.use(express.json());

//3rd party
server.use(helmet());
server.use(morgan('dev'));

server.use('./api/posts', postsRouter);
server.use('./api/users', userRouter)
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;


//validateUserId()

//validateUser()

//validatePost()

//
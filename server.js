const express = require('express');
const helmet = require('helmet')
const server = express();

const PostsRouter = require('./posts/postRouter');
//built-in
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;

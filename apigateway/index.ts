import express from 'express';
const app = express();

// Importing the proxy package and getting routes urls
const proxy = require('express-http-proxy');
const { USER_API_URL, TODO_API_URL, POST_API_URL, COMMENT_API_URL, } = require('./routes');

// Receiving proxy content of main services
const userProxy = proxy(USER_API_URL);
const todoProxy = proxy(TODO_API_URL);
const postProxy = proxy(POST_API_URL);
const commentProxy = proxy(COMMENT_API_URL);

// Main access url
app.get('/', (req, res) => res.send('🟢 Gateway Service'));

// Defining routes to main services
app.get('/users', (req, res, next) => userProxy(req, res, next));
app.get('/todos', (req, res, next) => todoProxy(req, res, next));
app.get('/posts', (req, res, next) => postProxy(req, res, next));
app.get('/comments', (req, res, next) => commentProxy(req, res, next));

// Api Gateway app runs
app.listen(3000, () => {
    console.log('🚀 The application is listening on port 3000!');
})
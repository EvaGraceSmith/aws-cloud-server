'use strict';

require('dotenv').config();

const express = require('express');
const app= express();

const PORT=process.env.PORT || 3001;

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send(`Hello ${req.query.name}`);
});

app.listen(PORT, () => console.log('Server running on port' , PORT));



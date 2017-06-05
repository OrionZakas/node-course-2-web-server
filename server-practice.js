const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Exion</h1>');
});

app.get('/about', (req, res) => {
  res.send({
    name: 'Orion',
    likes: [
          'Football',
          'Traveling',
          'Vacation',
          'Music'
    ]
  });
});

app.get('/contactUs', (req, res) => {
  res.send('<h3>Contact us at:</h3> Example@test.com');
});

app.get('/error', (req, res) => {
  res.send({
    errorMessage: 'Oops! Something went wrong.'
  });
});

app.listen(3001);

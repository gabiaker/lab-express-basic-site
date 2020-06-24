const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    console.log(request);
    response.send('/index.html');
  });

  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });

  app.get('/works', (request, response, next) => {
    response.send(`/views/works.html`);
  });

  app.get('/views/photos.html', (request, response, next) => {
    response.send(`/views/photos.html`);
  });

  app.get('/about', (request, response, next) => {
    response.send(`/views/about.html`);
  });

  app.get('/works', (request, response, next) => {
    response.send(`/views/works.html`);
  });
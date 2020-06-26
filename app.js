const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/views/homepage.html');
  });

  app.get('/homepage', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/views/homepage.html');
  });

  app.get('/photos', (request, response) => {
    response.sendFile(__dirname + `/views/photos.html`);
  });

  app.get('/about', (request, response) => {
    response.sendFile(__dirname + `/views/about.html`);
  });

  app.get('/works', (request, response) => {
    response.sendFile(__dirname + `/views/works.html`);
  });

  app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });

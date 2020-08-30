import Express from 'express';

const app: Express.Application = Express();

app.get('/', function(request, response) {
  response.send('hello... is it me youre looking for?')
});

app.listen(3001, function() {
  console.log('listening... ohai');
});
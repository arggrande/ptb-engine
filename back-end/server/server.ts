import Express from 'express';
import Posts from './routes/posts';

const app: Express.Application = Express();

// todo:
//  - auth middleware
//  - logging middleware
//  - debugging ability

app.get('/', function(request, response) {
  response.send('hello... is it me youre looking for?')
});

app.use(Posts);

app.listen(3001, function() {
  console.log('listening... ohai');
});
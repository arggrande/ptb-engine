import Express from 'express';
import Posts from './routes/posts';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

if(!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: Express.Application = Express();

app.use(helmet());
app.use(cors());
app.use(Express.json());

// todo:
//  - auth middleware
//  - logging middleware
//  - debugging ability

app.get('/', function(request, response) {
  response.send('hello... is it me youre looking for?')
});

app.use(Posts);

app.listen(PORT, function() {
  console.log(`listening... on port ${PORT}`);
});
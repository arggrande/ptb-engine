import Express from 'express';
import { PostRouter } from './routes';
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
  response.send('hello... is it me youre looking for? yes it is.')
});


// Configure routing
app.use(PostRouter);

const server = app.listen(PORT, function() {
  console.log(`listening... on port ${PORT}`);
});

type ModuleId = string | number;

interface WebpackHotModule {
  hot? : {
    data: any,
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void,
    accept(dependency: string, callback?: () => void): void,
    accept(errHandler?: (err: Error) => void): void,
    dispose(callback: (data: any) => void): void
    
  };
}

declare const module: WebpackHotModule;

if(module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
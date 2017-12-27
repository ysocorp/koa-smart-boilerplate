import { join } from 'path';
import { App as AppBase } from 'koa-smart';
import {
  i18n,
  bodyParser,
  compress,
  cors,
  helmet,
  addDefaultBody,
  handleError,
  logger,
  RateLimit,
  RateLimitStores,
} from 'koa-smart/middlewares';


export default class App extends AppBase { // the starting class must extend appBase, provided by koa-smart
  constructor() {
    super({ port: 3000 });
  }


  async start() {
    super.addMiddlewares([ // we add the relevant middlewares to our API
      cors({ credentials: true }), // add cors headers to the requests
      helmet(), // adds various security headers to our API's responses
      bodyParser(), // automatically parses the body of POST/PUT/PATCH requests, and adds it to the koa context
      i18n(this.app, {
        directory: join(__dirname, 'locales'),
        locales: ['en', 'fr'],
        modes: ['query', 'subdomain', 'cookie', 'header', 'tld'],
    }),// allows us to easily localize the API
      logger, // gives detailed logs of each request made on the API
      handleError, // helps handling error codes
      addDefaultBody, // if no body is present, put an empty object "{}" in its place.
      compress({}) // compresses requests made to the API
    ]);

    super.mountFolder(join(__dirname, 'routes'), '/'); // adds a folder to scan for route files
    return super.start();
  }
}

let app = new App();
app.start();

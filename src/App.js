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


// Set Default Option
RateLimit.defaultOptions({
  // in production you should use RateLimitStores.Sequelize or create your own 
  // see https://github.com/ysocorp/koa2-ratelimit for more information
  store: new RateLimitStores.Memory(), // By default it will create MemoryStore
});

export default class App extends AppBase { // the starting class must extend appBase, provided by koa-smart
  constructor() {
    super({
      port: 3000,
      // routeParam is an object and it will be give as parametter to all routes
      // so for example you can give models to all your route so you can access on route 
      routeParam: {},
    });
  }


  async start() {
    super.addMiddlewares([ // we add the relevant middlewares to our API
      cors({ credentials: true }), // add cors headers to the requests
      helmet(), // adds various security headers to our API's responses
      bodyParser(), // automatically parses the body of POST/PUT/PATCH requests, and adds it to the koa context
      i18n(this.app, {
        directory: join(__dirname, 'locales'),
        locales: ['en', 'fr'],
        modes: ['query', 'subdomain', 'cookie', 'header', 'tld']
      }),// allows us to easily localize the API
      handleError(), // helps handling error codes
      logger(), // gives detailed logs of each request made on the API
      addDefaultBody(), // if no body is present, put an empty object "{}" in its place.
      compress({}), // compresses requests made to the API
      RateLimit.middleware({ interval: { min: 1 }, max: 100 }) // this will limited every user to call a maximum of 100 request per minute
    ]);

    super.mountFolder(join(__dirname, 'routes'), '/'); // adds a folder to scan for route files
    return super.start();
  }
}


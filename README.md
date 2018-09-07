# RESTful json API Boilerplate Object with Decorator, Params checker, Koajs 2

A **RESTful json API** boilerplate with **Koajs 2**, **@ Decorators**, **Node v8!**, `async-await`, `babel`, and much more...

```sh
  export default class RouteUsers extends Route {

    // get route: http://localhost:3000/users/get/:id
    @Route.Get({
      path: 'get/:id'
    })
    async get(ctx) {
      this.sendOk(ctx, ctx.params.id);
    }

    // post route: http://localhost:3000/users/add
    @Route.Post({
      bodyType: Types.object().keys({
        email: Types.string().required(), // return an 400 if the body doesn't contain email key
        name: Types.string().uppercase(), // optional parameter
      }),
    })
    async add(ctx) {
      const body = this.body(ctx); // or ctx.request.body
      // body can contain only an object with email and name field
      this.sendCreated(ctx, body);
    }

  }
```

## Summary

- What's in this boilerplate ?
- Get started
- Router with decorator

## What's in this boilerplate ?

- [**koa-smart**](https://github.com/ysocorp/koa-smart) Framework based on Koajs2, this allow you to develop RESTful API with : Class, Decorator, Params checker
- [`babel`](https://babeljs.io/) to use the latest javascript version
- [`nodemon`](https://github.com/remy/nodemon) allows to automatically restart your API whenever you change a file during development.
- [`eslint`](https://github.com/eslint/eslint) with ES7 thanks to `babel-eslint`

## Directory structure

The repository root contains auxiliary files like `package.json`, `.gitignore`, etc.

- `src`: the actual app's code is stored here
  - `locales`: all files needed to Internationalize your api (I18n)
  - `routes`: API endpoints go here, all files extending the RouteBase class will be loaded automatically
  - `middleware`: custom middleware for your application, written koa-style.

## Get started

Clone this repository, remove the `.git` directory, run `git init`, and adjust details in `package.json`.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). **Node.js v8.9.1** or higher will be required.

- **Install package**
  `npm install`
- **Run Dev**
  `yarn dev OR npm run dev`
- **Run Test**
  `yarn test OR npm run test`
- **Build the Prod**
  `yarn build-prod OR npm run build-prod`
- **Run Prod**
  `yarn prod OR npm run prod`

## Router with decorator

**All routes have to extend the `Route` class in order to be added, and have to be inside the `routes` folder**
see [`koa-smart`](https://github.com/ysocorp/koa-smart) for more informations

## License

MIT © [YSO Corp](http://www.ysocorp.com/)

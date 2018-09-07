import { Types } from 'koa-smart';

import Route from './Route';

export default class RouteExample extends Route {
  constructor(params) {
    super({ ...params });
  }

  // get route: http://localhost:3000/example/:id
  @Route.Get({
    path: '/:id', // as we defined a segment in the path (:id), the value entered in the url will be available as ctx.params.id
  })
  async get(ctx) {
    this.sendOk(ctx, ctx.params.id); // we simply return the parameter
  }

  // post route: http://localhost:3000/example
  @Route.Post({
    path: '',
    bodyType: Types.object().keys({
      // params to allow: all other params will be rejected
      email: Types.string().required(), // return a 400 if the body doesn't contain email key
      password: Types.string(), // password is optional
    }),
  })
  async add(ctx) {
    const body = this.body(ctx); // or ctx.request.body
    // body can contain only an object with email and password field
    this.sendCreated(ctx, body); // helper function which sets the status to 201 and return the parameter
  }
}

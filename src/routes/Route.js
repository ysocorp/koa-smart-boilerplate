import { Route as RouteBase, StatusCode } from 'koa-smart';

export default class Route extends RouteBase {

  constructor(params) {
    super(params);
  }

  // ************************************ MIDDLEWARE *********************************
  async beforeRoute(ctx, infos, next) { // the "beforeRoute" function is executed before any call to a route belonging to the same class (or a class ihneriting from it) is made.
    await super.beforeRoute(ctx, infos, next);
    return false;
  }

  async afterRoute(ctx, infos, next) { // in the same manner as beforeRoute, afterRoute is executed after a request is made.
    await super.beforeRoute(ctx, infos, next);
    return false;
  }

  // ************************************ !MIDDLEWARE *********************************
}

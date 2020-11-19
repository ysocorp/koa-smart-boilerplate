import { Route as RouteBase } from 'koa-smart'
import { BeforeRouteParams } from 'koa-smart/dist/routes/Route'
import { Context } from 'koa'

export default class Route extends RouteBase {
  async beforeRoute (ctx: Context, infos: BeforeRouteParams, next: Function) {
    // the "beforeRoute" function is executed before any call to a route belonging to the same class
    // (or a class ihneriting from it) is made.
    await super.beforeRoute(ctx, infos, next)
  }
}

import Route from './Route'
import { RouteParams } from 'koa-smart/dist/routes/Route'
import { Context } from 'koa'
import packageJson from '../../package.json'

@Route.Route({
  routeBase: ''
})
export default class RouteIndex extends Route {
  constructor (params: RouteParams) {
    super({ ...params })
  }

  // http://localhost:3000/
  @Route.Get({ path: '/' })
  index (ctx: Context) {
    this.sendOk(ctx, {
      name: packageJson.name,
      version: packageJson.version
    })
  }
}

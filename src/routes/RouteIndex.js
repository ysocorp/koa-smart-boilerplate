import Route from './Route';
import packageJson from '../../package.json';

@Route.Route({
  routeBase: '',
})
export default class RouteIndex extends Route {
  constructor(params) {
    super({ ...params });
  }

  // http://localhost:3000/
  @Route.Get({ path: '/' })
  index(ctx) {
    this.sendOk(ctx, {
      name: packageJson.name,
      version: packageJson.version,
    });
  }
}

import expect from 'expect';
import supertest from 'supertest';

import createserver from '../_createserver';
import packageJson from '../../package.json';

describe('RouteIndex', () => {
  let _server;
  let request;

  before(async () => {
    _server = await createserver();
    request = supertest.agent(_server);
  });

  after(async () => {
    _server.close();
  });

  it('should return informations about api', async () => {
    const { body } = await request.get('');
    expect(body.data.name).toEqual(packageJson.name);
    expect(body.data.version).toEqual(packageJson.version);
  });
});

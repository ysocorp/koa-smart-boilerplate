import expect from 'expect';
import supertest from 'supertest';

import createserver from '../_createserver';

describe('RouteExample', () => {
  let _server;
  let request;

  before(async () => {
    _server = await createserver();
    request = supertest.agent(_server);
  });

  after(async () => {
    _server.close();
  });

  describe('GET => /example/:ID', () => {
    it('should response with an 200', async () => {
      const { statusCode } = await request.get('/example/465');
      expect(statusCode).toEqual(200);
    });

    it('should return the parameter give', async () => {
      const { body } = await request.get('/example/465');
      expect(body.data).toEqual('465');
    });
  });

  describe('POST => /example', () => {
    const bodySend = {
      email: 'clientnew@new.com',
      password: 'password',
      notPermited: 'notPermited',
    };

    it('should response with an 201', async () => {
      const { statusCode } = await request.post('/example').send(bodySend);
      expect(statusCode).toEqual(201);
    });

    it('should keep only elem in params decorator', async () => {
      const { body } = await request.post('/example').send(bodySend);

      expect(body.data).toEqual({
        email: 'clientnew@new.com',
        password: 'password',
      });
      expect(body.data.notPermited).toBe(undefined);
    });

    it('should return 400 if required params are not send', async () => {
      const respKO = await request
        .post('/example')
        .send({ password: 'password' });
      expect(respKO.statusCode).toBe(400);

      const respOK = await request.post('/example').send({ email: 'email' });
      expect(respOK.statusCode).toBe(201);
    });
  });
});

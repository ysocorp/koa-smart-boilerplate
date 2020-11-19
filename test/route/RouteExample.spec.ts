import expect from 'expect'
import supertest from 'supertest'
import { Server } from 'http'

import createserver from '../_createserver'

describe('RouteExample', () => {
  let _server: Server
  let request: supertest.SuperAgentTest

  before(async () => {
    _server = await createserver()
    request = supertest.agent(_server)
  })

  after(async () => {
    _server.close()
  })

  describe('GET => /example/:ID', () => {
    it('should response with an 200', async () => {
      const { status } = await request.get('/example/465')
      expect(status).toEqual(200)
    })

    it('should return the parameter give', async () => {
      const { body } = await request.get('/example/465')
      expect(body.data).toEqual('465')
    })
  })

  describe('POST => /example', () => {
    const bodySend = {
      email: 'clientnew@new.com',
      password: 'password',
      notPermited: 'notPermited'
    }

    it('should response with an 201', async () => {
      const { status } = await request.post('/example').send(bodySend)
      expect(status).toEqual(201)
    })

    it('should keep only elem in params decorator', async () => {
      const { body } = await request.post('/example').send(bodySend)

      expect(body.data).toEqual({
        email: 'clientnew@new.com',
        password: 'password'
      })
      expect(body.data.notPermited).toBe(undefined)
    })

    it('should return 400 if required params are not send', async () => {
      const respKO = await request
        .post('/example')
        .send({ password: 'password' })
      expect(respKO.status).toBe(400)

      const respOK = await request.post('/example').send({ email: 'email' })
      expect(respOK.status).toBe(201)
    })
  })
})

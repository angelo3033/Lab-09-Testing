//const request = require('supertest')

//const index = require('./src/index')

import request from 'supertest'

import index from './src/index'

const api = supertest(index)

test('Alumnos', () => {
    api
        .get('/api/alumnos')
        .expect(200,done)
})


/*
describe('responde usuarios',done => {
    request(index)
        .get('/api/alumnos')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200,done);  
})
*/
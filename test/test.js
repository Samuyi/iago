var request = require('supertest');
var app = require('../app.js');


describe('GET /', () => {
 it('responds with a welcome message', (done) => {

 request(app).get('/')
  .expect(200)
  .expect('{"msg":"welcome to bird finder"}', done);
})
});

describe('POST /bird',() => {
 it('responds with a 200', (done) => {
  request(app).post('/bird')
  .send({bird: 'robbin'})
  .expect(200, done);
 })
})

describe('GET /bird', () => {
 it('responds with a 200', (done) => {
  request(app).get('/bird')
   .expect(200, done);
 })
})



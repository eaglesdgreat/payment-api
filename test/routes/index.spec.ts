import * as chai from 'chai'
import chaiHttp = require('chai-http')
import mocha from 'mocha'
import app from '../../src/app'

chai.use(chaiHttp) 
const expect = chai.expect


describe('baseRoutes', () => {
  it('should be able to respond with HTTp status 200', async () => {
    return chai
      .request(app)
      .get('./index')
      .then(res => {
        expect(res.status).to.be.equal(200)
      })
  })
  it('should respond with success message', async () => {
    return chai
      .request(app)
      .get('/index')
      .then(res => {
        expect(res.body.status).to.be.equal('success')
      })
  })
})
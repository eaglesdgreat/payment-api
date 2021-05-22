import bodyParser from 'body-parser'
import express from 'express'

class App {
  public app: express.Application
  
  public constructor() {
    this.app = express()
    this.app.use(bodyParser.json)
  }
}

export default new App().app
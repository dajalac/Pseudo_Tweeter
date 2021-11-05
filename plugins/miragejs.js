import { Server } from 'miragejs'

// if (process.env.NODE_ENV === 'development') {
//   require('../miragejs/server').makeServer()
// }
// eslint-disable-next-line no-new
new Server({
  routes () {
    this.namespace = '/api'
    this.urlPrefix = 'http://localhost:3000'

    this.get('/test', () => {
      return [{
        id: 1,
        nome: 'dani'
      }]
    })
  }
})

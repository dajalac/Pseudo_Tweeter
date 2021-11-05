import { Server } from 'miragejs'
import { getAllTweets, getFollowSuggestions } from './data'

// eslint-disable-next-line no-new
new Server({
  routes () {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'

    this.get('/tweets', () => {
      return [getAllTweets()]
    })

    this.get('/followSuggestions', () => {
      return [getFollowSuggestions()]
    })
  }
})

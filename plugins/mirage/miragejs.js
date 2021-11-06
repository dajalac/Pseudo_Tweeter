import { Server } from 'miragejs'
import {
  getAllTweets,
  getFollowSuggestions,
  setUpUser,
  getUserTweets,
  postNewTweeter,
  getFavorites,
  newFavorite
} from './data'

// eslint-disable-next-line no-new
new Server({
  routes () {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'

    this.get('/user', () => {
      return [setUpUser()]
    })

    this.get('userTweets', () => {
      return [getUserTweets()]
    })

    this.get('/tweets', () => {
      return [JSON.parse(JSON.stringify(getAllTweets()))]
    })

    this.get('/followSuggestions', () => {
      return [getFollowSuggestions()]
    })

    this.get('/favorites', () => {
      return [getFavorites()]
    })

    this.post('/newTweet', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      postNewTweeter(attrs.payload)
    })

    this.post('/newFavorite', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      newFavorite(attrs.id)
    })
  }
})

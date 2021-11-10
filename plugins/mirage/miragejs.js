import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'
// import {
//   getAllTweets,
//   getFollowSuggestions,
//   setUpUser,
//   getUserTweets,
//   postNewTweeter,
//   getFavorites,
//   newFavorite
// } from './data'

const userInfo = {
  name: faker.name.findName(),
  userName: '@ilovecandy4ever',
  profile: faker.image.avatar()
}

// eslint-disable-next-line no-new
createServer({
  models: {
    user: Model,
    tweet: Model,
    toFollowSuggestion: Model
  },

  factories: {
    tweet: Factory.extend({
      id () {
        return faker.datatype.uuid()
      },
      name (i) {
        let name = faker.name.findName()
        if (i % 3 === 0) {
          name = userInfo.name
        }
        return name
      },
      userName (i) {
        const nameList = this.name.split(' ')
        let userName = '@' + nameList[0].toLowerCase() + faker.datatype.number()
        if (i % 3 === 0) {
          userName = userInfo.userName
        }
        return userName
      },
      profilePhoto (i) {
        let photo = faker.image.avatar()
        if (i % 3 === 0) {
          photo = userInfo.profile
        }
        return photo
      },
      tweet () {
        return faker.lorem.sentence()
      },
      postMedia (i) {
        let postImage = null
        if (i % 2 === 0 || i % 3 === 0) {
          postImage = faker.random.image()
        }
        return postImage
      },
      liked () {
        return false
      },
      timeStamp () {
        return Date.now()
      }

    }),
    toFollowSuggestion: Factory.extend({
      name () {
        return faker.name.findName()
      },
      userName () {
        const nameList = this.name.split(' ')
        return '@' + nameList[0].toLowerCase() + faker.datatype.number()
      },
      profilePhoto () {
        return faker.image.avatar()
      }
    })
  },

  seeds (server) {
    server.create('user', userInfo)

    server.createList('tweet', 6)
    server.createList('toFollowSuggestion', 2)
  },

  routes () {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'

    this.get('/user', (schema) => {
      return schema.users.all()
    })

    this.get('/tweets', (schema) => {
      const tweets = schema.tweets.all()
      const tweetsSorted = tweets.models.sort((a, b) => {
        return b.attrs.timeStamp - a.attrs.timeStamp
      })
      return tweetsSorted // schema.tweets.all()
    })

    this.get('/userTweets', (schema) => {
      const userTweets = schema.tweets.where({ userName: '@ilovecandy4ever' })
      const userTweetsSorted = userTweets.models.sort((a, b) => {
        return b.attrs.timeStamp - a.attrs.timeStamp
      })
      return userTweetsSorted
    })

    this.get('/followSuggestions', (schema) => {
      return schema.toFollowSuggestions.all()
    })

    this.get('/favorites', (schema) => {
      const favorites = schema.tweets.where({ liked: 'true' })
      const favoritesSorted = favorites.models.sort((a, b) => {
        return b.attrs.timeStamp - a.attrs.timeStamp
      })
      return favoritesSorted
    })

    this.post('/newTweet', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      schema.tweets.create(attrs.payload)
    })

    this.post('/newFavorite', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      const favorite = schema.tweets.find(attrs.id)
      favorite.update({ liked: !favorite.liked })
    })
  }

})
// eslint-disable-next-line no-new
// new Server({
//   routes () {
//     this.namespace = 'api'
//     this.urlPrefix = 'http://localhost:3000'

//     this.get('/user', () => {
//       return [setUpUser()]
//     })

//     this.get('userTweets', () => {
//       return [getUserTweets()]
//     })

//     this.get('/tweets', () => {
//       return [JSON.parse(JSON.stringify(getAllTweets()))]
//     })

//     this.get('/followSuggestions', () => {
//       return [getFollowSuggestions()]
//     })

//     this.get('/favorites', () => {
//       return [getFavorites()]
//     })

//     this.post('/newTweet', (schema, request) => {
//       const attrs = JSON.parse(request.requestBody)
//       postNewTweeter(attrs.payload)
//     })

//     this.post('/newFavorite', (schema, request) => {
//       const attrs = JSON.parse(request.requestBody)
//       newFavorite(attrs.id)
//     })
//   }
// })

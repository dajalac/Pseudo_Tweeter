import axios from 'axios'

export const state = () => ({
  tweets: [],
  suggestions: [],
  userTweets: [],
  favorites: [],
  user: null,
  status: 'home'
})

export const mutations = {
  setupStatus (state, value) {
    state.status = value
  },

  setUpTweets (state, value) {
    state.tweets = value
  },

  setupUserTweets (state, value) {
    /** NOTE: the user Tweets are in the store, not in a local state,
     because I use them on the home page to display how many tweets the user has **/
    const allTweets = state.tweets
    // get the number of userTweets
    const userTweets = allTweets.filter((tweet) => {
      return tweet.userName === state.user.userName
    })
    state.userTweets = userTweets
  },

  setUpSuggestions (state, value) {
    state.suggestions = value
  },

  setupUser (state, value) {
    state.user = value
  },

  setupFavorites (state, value) {
    state.favorites = value
  },

  postTweets (state, value) {
    state.tweets.unshift(value)
    state.userTweets.unshift(value)
  },
  newFavorite (state, value) {
    // eslint-disable-next-line array-callback-return
    state.tweets.map((tweet) => {
      if (tweet.id === value.id) {
        tweet.liked = !tweet.liked
        state.favorites.unshift(tweet)
      }
    })
  }
}

export const actions = {

  setupStatus ({ commit }, stateValue) {
    commit('setupStatus', stateValue)
  },

  async setupUser ({ commit }) {
    await axios.get('/api/user').then((response) => {
      commit('setupUser', response.data.users[0])
    })
  },

  async setUpTweets ({ commit }) {
    await axios.get('/api/tweets').then((response) => {
      commit('setUpTweets', response.data)
      commit('setupUserTweets') // no more need for the endpoint "/api/userTweets"
    })
  },

  async setUpSuggestions ({ commit }) {
    await axios.get('/api/followSuggestions').then((response) => {
      commit('setUpSuggestions', response.data.toFollowSuggestions)
    })
  },

  async setupFavorites ({ commit }) {
    await axios.get('/api/favorites').then((response) => {
      commit('setupFavorites', response.data)
    })
  },

  async postTweet ({ commit, state }, payload) {
    await axios.post('/api/newTweet', payload)
    commit('postTweets', payload.payload)
  },

  async newFavorite ({ commit, state }, payload) {
    await axios.post('/api/newFavorite', payload)
    commit('newFavorite', payload) // so you just need to fetch the data when the page is first loaded
  }

}
export const getters = {
  getStatus (state) {
    return state.status.page
  },

  getUser (state) {
    return state.user
  },

  getUserTweets (state) {
    return state.userTweets
  },

  getTweets (state) {
    return state.tweets
  },

  getFollwers (state) {
    return state.suggestions
  },

  getFavorites (state) {
    return state.favorites
  }

}

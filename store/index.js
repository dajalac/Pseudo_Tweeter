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

  setupUserTweets (state, vaue) {
    state.userTweets = vaue
  },

  setUpSuggestions (state, value) {
    state.suggestions = value
  },

  setupUser (state, value) {
    state.user = value
  },

  setupFavorites (state, value) {
    state.favorites = value
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

  async setupUserTweets ({ commit }) {
    await axios.get('/api/userTweets').then((response) => {
      commit('setupUserTweets', response.data)
    })
  },

  async setUpTweets ({ commit }) {
    await axios.get('/api/tweets').then((response) => {
      console.log('fall', response.data)
      commit('setUpTweets', JSON.parse(JSON.stringify(response.data)))
    })
  },

  async setUpSuggestions ({ commit }) {
    await axios.get('/api/followSuggestions').then((response) => {
      commit('setUpSuggestions', response.data.toFollowSuggestions)
    })
  },

  async setupFavorites ({ commit }) {
    await axios.get('/api/favorites').then((response) => {
      commit('setupFavorites', response.data.tweets)
    })
  },

  async postTweet ({ commit, state }, payload) {
    await axios.post('/api/newTweet', payload)
  },

  async newFavorite ({ commit, state }, payload) {
    await axios.post('/api/newFavorite', payload)
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

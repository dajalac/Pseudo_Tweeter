import axios from 'axios'

export const state = () => ({
  tweets: [],
  suggestions: [],
  userTweets: [],
  user: null
})

export const mutations = {
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
  }
}

export const actions = {
  async setupUser ({ commit }) {
    await axios.get('/api/user').then((response) => {
      commit('setupUser', response.data[0])
    })
  },

  async setupUserTweets ({ commit }) {
    await axios.get('/api/userTweets').then((response) => {
      commit('setupUserTweets', response.data)
    })
  },

  async setUpTweets ({ commit }) {
    await axios.get('/api/tweets').then((response) => {
      commit('setUpTweets', JSON.parse(JSON.stringify(response.data)))
    })
  },

  async setUpSuggestions ({ commit }) {
    await axios.get('/api/followSuggestions').then((response) => {
      commit('setUpSuggestions', response.data)
    })
  },

  async postTweet ({ commit, state }, payload) {
    await axios.post('/api/newTweet', payload)
  }

}
export const getters = {
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
  }
}

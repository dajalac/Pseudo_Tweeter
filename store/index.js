import axios from 'axios'

export const state = () => ({
  tweets: [],
  suggestions: []
})

export const mutations = {
  setUpTweets (state, value) {
    state.tweets = value
  },

  setUpSuggestions (state, value) {
    state.suggestions = value
  }
}

export const actions = {
  async setUpTweets ({ commit }) {
    await axios.get('/api/tweets').then((response) => {
      commit('setUpTweets', response.data)
    })
  },

  async setUpSuggestions ({ commit }) {
    await axios.get('/api/followSuggestions').then((response) => {
      console.log('hereeee', response.data)
      commit('setUpSuggestions', response.data)
    })
  }
}
export const getters = {
  getTweets (state) {
    return state.tweets
  },

  getFollwers (state) {
    return state.suggestions
  }
}

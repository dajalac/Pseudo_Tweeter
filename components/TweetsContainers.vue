<template>
  <div class="flex flex-col intems-center rounded-lg shadow w-full">
    <div
      class="bg-white border-b border-gray-200  flex intems-center justify-start rounded-lg h-16 pl-6 pt-2 text-lg font-medium  text-gray-500
       // sm:text-3xl sm:h-16 sm:font-normal"
    >
      Tweets
    </div>
    <div class="flex flex-col gap-2">
      <tweets-card v-for="(tweet) in data" :key="tweet.id" :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import TweetsCard from './TweetsCard.vue'
export default {
  components: { TweetsCard },
  props: {
    screen: {
      type: String,
      required: true
    }
  },
  // data () {
  //   return {

  //   }
  // },
  computed: {

    data () {
      const tweetsList = []
      const screen = this.$store.getters.getStatus

      if (screen === 'home') {
        tweetsList.length = 0
        const tweets = this.$store.getters.getTweets
        tweetsList.push(tweets)
      }
      if (screen === 'user') {
        tweetsList.length = 0
        const tweets = this.$store.getters.getUserTweets
        tweetsList.push(tweets)
      }
      if (screen === 'favorites') {
        tweetsList.length = 0
        const tweets = this.$store.getters.getFavorites
        tweetsList.push(tweets)
      }
      return tweetsList[0]
    }
  }

}
</script>

<style>

</style>

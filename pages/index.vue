<template>
  <div class="bg-gray-100 flex justify-center">
    <div class="flex flex-col gap-2 items-top justify-center mt-16 mx-1// sm:mx-14  sm:mt-20 // md:flex-row md:mx-28 md:w-4/5 ">
      <!--left column-->
      <div class="flex flex-col w-full gap-2 // md:gap-4 md:w-2/3 ">
        <user-card />
        <!--folow suggestion on mubile view-->
        <div class="flex // md:hidden">
          <to-follow-container />
        </div>
        <trends-card /> <!--trends card will desapear in mobile view -->
      </div>
      <!--center column-->
      <tweets-containers :screen="data" />
      <!--right column-->
      <div class="hidden flex-col gap-4 w-2/3 // md:flex ">
        <to-follow-container />
        <copy-right-card />
      </div>
    </div>
  </div>
</template>

<script>
import CopyRightCard from '../components/CopyRightCard.vue'
import ToFollowContainer from '../components/ToFollowContainer.vue'
import TrendsCard from '../components/TrendsCard.vue'
import UserCard from '../components/UserCard.vue'

export default {
  components: { UserCard, TrendsCard, CopyRightCard, ToFollowContainer },
  data () {
    return {
      data: 'home'
    }
  },
  async fetch ({ store }) {
    const user = store.getters.getUser

    if (user === null) {
      return await store.dispatch('setupUser')
    }
  },

  created () {
    const tweets = this.$store.getters.getTweets
    const suggestions = this.$store.getters.getFollwers
    // loading components were implemented to display while the data are being fetched
    this.$store.dispatch('setupStatus', { page: 'home' })

    if (tweets.length === 0) {
      this.$store.dispatch('setUpTweets')
    }
    if (suggestions.length === 0) {
      this.$store.dispatch('setUpSuggestions')
    }
  }

}

</script>

<style lang="postcss" scope>
</style>

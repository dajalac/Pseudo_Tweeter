<template>
  <div class="bg-white flex flex-col w-full py-4 rounded-lg shadow // sm:py-0">
    <!--bg imag-->
    <div class="flex">
      <img
        src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg"
        alt="cover"
        class="h-32 rounded-t-lg w-full // md:h-40 "
      >
    </div>
    <!--user info container -->
    <div class="flex flex-row ml-4">
      <!--profile imag-->
      <div class="flex flex-row justify-center intems-center">
        <img
          :src=" user.profile "
          alt="Joe doe"
          class="rounded-full h-20 w-20 -mt-10 // sm:h-32 sm:w-32"
        >
      </div>
      <!--user name-->
      <div class="flex flex-col ml-4 text-left">
        <h3 class="font-semibold text-xl">
          {{ user.name }}
        </h3>
        <span class="text-sm"> {{ user.userName }}</span>
      </div>
    </div>
    <!--tweets info container -->
    <div class="border-b border-gray-200 cursor-pointer flex gap-3 justify-center mx-2 py-1 text-gray-500 text-xs // sm:gap-10  sm:text-sm">
      <div class="flex flex-col items-center justify-center hover:text-blue-600 " @click="getUserTweets">
        <span>TWEETS</span>
        <span>{{ userTweets }}</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span>FOLLOWING</span>
        <span>200</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span>FOLLERS</span>
        <span>200</span>
      </div>
      <div class="flex flex-col items-center justify-center hover:text-blue-600" @click="getFavorites">
        <span><fa :icon="['far', 'star']" /> FAVORITES</span>
        <span>{{ favoritesNumber }}</span>
      </div>
    </div>
    <!-- tweets input container -->
    <div
      class="border border-gray-400 ml-2 my-3 px-2 rounded-full w-11/12
            // sm:ml-6 // md:ml-2"
      @click="showModal = true"
    >
      <input
        type="text"
        placeholder="Compose new Tweet"
      >
      <div>
        <TweetInputModal v-show="showModal" :user="user" @close="showModal = false" />
      </div>
    </div>
  </div>
</template>

<script>
import TweetInputModal from './TweetInputModal.vue'
export default {
  components: { TweetInputModal },
  data () {
    return {
      showModal: false,
      user: null
    }
  },
  computed: {
    favoritesNumber () {
      const number = this.$store.getters.getFavorites
      return number[0].length
    },
    userTweets () {
      const userTweetsNumber = this.$store.getters.getUserTweets
      return userTweetsNumber[0].length
    }
  },

  created () {
    this.user = this.$store.getters.getUser
  },
  methods: {
    getFavorites () {
      this.$store.dispatch('setupStatus', { page: 'favorites' })
    },

    getUserTweets () {
      this.$store.dispatch('setupStatus', { page: 'user' })
    }
  }
}
</script>

<style>

</style>

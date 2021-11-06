<template>
  <div class="bg-white flex flex-col w-full py-4 rounded-lg shadow // sm:py-0">
    <!--bg imag-->
    <div class="hidden // sm:flex">
      <img
        src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg"
        alt="cover"
        class="h-32 rounded-t-lg w-full // "
      >
    </div>
    <!--user info container -->
    <div class="flex flex-row ml-4">
      <!--profile imag-->
      <div class="flex flex-row justify-center intems-center ">
        <img
          :src=" user.profile "
          alt="Joe doe"
          class="rounded-full h-16 w-16 // sm:h-24 sm:w-24 sm:-mt-10"
        >
      </div>
      <!--user name-->
      <div class="flex flex-col ml-2 text-left">
        <h3 class="font-semibold">
          {{ user.name }}
        </h3>
        <span class="text-sm"> {{ user.userName }}</span>
      </div>
    </div>
    <!--tweets info container -->
    <div class="hidden border-b border-gray-200 gap-3 mx-2 py-3 text-gray-500 text-sm  // md:flex">
      <div class="flex flex-col items-center justify-center ">
        <span>TWEETS</span>
        <span>2,409</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span>FOLLOWING</span>
        <span>200</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span>FOLLERS</span>
        <span>200</span>
      </div>
    </div>
    <!-- tweets input container -->
    <div
      class="border border-gray-400  ml-20 -mt-4 px-2 rounded-full w-3/5
            // sm:ml-6 sm:mt-1 sm:w-11/12 sm:mt-3 sm:mb-3 // md:ml-2"
      @click="showModal = true"
    >
      <input
        type="text"
        placeholder="Compose new Tweet"
      >
      <TweetInputModal v-show="showModal" :user="user" @close="showModal = false" />
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
  created () {
    this.user = this.$store.getters.getUser
  }

}
</script>

<style>

</style>

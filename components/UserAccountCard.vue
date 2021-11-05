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
      <div>
        <img
          src="https://www.bnl.gov/today/body_pics/2017/06/stephanhruszkewycz-hr.jpg"
          alt="Joe doe"
          class="rounded-full h-32 w-32 -mt-10"
        >
      </div>
      <!--user name-->
      <div class="flex flex-col ml-4 text-left">
        <h3 class="font-semibold text-xl">
          Joe doe
        </h3>
        <span class="text-sm"> @useraccount</span>
      </div>
    </div>
    <!--tweets info container -->
    <div class="border-b border-gray-200 flex gap-3 justify-center mx-2 py-1 text-gray-500 text-xs // sm:gap-10  sm:text-sm">
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
      <div class="flex flex-col items-center justify-center">
        <span><fa :icon="['far', 'star']" /> FAVORITES</span>
        <span>20</span>
        <button class="">
          <span>See favotires</span>
        </button>
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
        <TweetInputModal v-show="showModal" @close="showModal = false" />
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
      showModal: false
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="flex flex-col intems-center rounded-lg shadow">
    <div
      class="bg-white border-b border-gray-200  flex intems-center justify-start rounded-lg h-16 pl-6 pt-2 text-lg font-medium  text-gray-500
       // sm:text-3xl sm:h-16 sm:font-normal"
    >
      Tweets
    </div>
    <div class="flex flex-col gap-2">
      <tweets-card />
      <tweets-card />
      <tweets-card />
      <tweets-card />
    </div>
  </div>
</template>

<script>
import TweetsCard from './TweetsCard.vue'
export default {
  components: { TweetsCard }

}
</script>

<style>

</style>

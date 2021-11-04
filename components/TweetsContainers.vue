<template>
  <div class="flex flex-col rounded-lg shadow">
      <div class="bg-white border-b border-gray-200 rounded-lg h-16 pl-6 text-3xl text-gray-500">Tweets</div>
      <div class="flex flex-col gap-2">
      <tweets-card/>
      <tweets-card/>
      <tweets-card/>
      <tweets-card/>
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

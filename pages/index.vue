<template>
  <div class="flex flex-col gap-2 items-center justify-center mt-16 // sm:mx-14  // md:flex-row md:mx-28">
    <div class="w-full md:w-2/3 " >
      <user-card/>
    </div>
    <tweets-card />
    <div class="w-2/3">
    <user-card/>
    </div>
  </div>
</template>

<script>
import TweetsCard from '../components/TweetsCard.vue'
import UserCard from '../components/UserCard.vue'
export default {
  components: { TweetsCard, UserCard }
  // flex flex-col justify-center items-center gap-2 mt-16 sm:mx-14 md:mx-28 md:flex-row
}
</script>

<style lang="postcss" scope>
</style>

<template>
  <div class="flex flex-col gap-2 items-center justify-center mt-16 // sm:mx-14  // md:flex-row md:mx-28">
    <div class="flex flex-col w-full gap-4 // md:w-2/3 " >
      <user-card/>
      <trends-card/>
    </div>
    <tweets-card />
    <div class="flex gap-4 flex-col w-2/3">
    <follow-card/>
    <copy-right-card/>
    </div>
  </div>
</template>

<script>
import CopyRightCard from '../components/CopyRightCard.vue'
import FollowCard from '../components/FollowCard.vue'
import TrendsCard from '../components/TrendsCard.vue'
import TweetsCard from '../components/TweetsCard.vue'
import UserCard from '../components/UserCard.vue'
export default {
  components: { TweetsCard, UserCard, FollowCard, TrendsCard, CopyRightCard }
  // flex flex-col justify-center items-center gap-2 mt-16 sm:mx-14 md:mx-28 md:flex-row
}
</script>

<style lang="postcss" scope>
</style>

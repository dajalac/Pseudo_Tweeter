<template>
  <div class="bg-gray-100 flex">
    <div class="flex flex-col gap-2 items-top justify-center mt-16 mx-1 // sm:mx-14  sm:mt-20 // md:flex-row md:mx-28">
      <!--left column-->
      <div class="hidden flex-col gap-2 w-2/3 // md:flex">
        <trends-card />
      </div>
      <!--center-->
      <div class="flex flex-col gap-2">
        <user-account-card />
        <tweets-containers />
      </div>
      <!--right column-->
      <div class="hidden flex-col gap-4 w-2/3 // md:flex">
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
import UserAccountCard from '../components/UserAccountCard.vue'
export default {
  components: { TrendsCard, CopyRightCard, ToFollowContainer, UserAccountCard }
}
</script>

<style>

</style>

<template>
  <div class="bg-white flex flex-col justify-center pb-10 rounded-lg shadow w-full">
    <div class="flex items-center justify-start h-16 pl-4 text-2xl text-gray-500">
      Who to follow
    </div>
    <div class="flex flex-col items-center gap-2 // sm:flex-row // md:flex-col">
      <follow-card />
      <follow-card />
    </div>
  </div>
</template>

<script>
import FollowCard from './FollowCard.vue'
export default {
  components: { FollowCard }

}
</script>

<style>

</style>

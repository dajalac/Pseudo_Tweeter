<template>
  <div class="bg-white flex gap-2 border items-center justify-between p-2 shadow w-11/12">
    <div class="flex gap-2">
      <!--photo-->
      <div class="flex flex-row justify-center intems-center w-16">
        <img
          v-bind:src="person.profilePhoto"
          alt= "person.name "
          class="rounded-full h-16 w-16"
        >
      </div>
      <!--user suggestion-->
      <div class="flex flex-col gap-2 items-left justify-center mt-6">
        <div class="flex gap-1 items-center">
          <span class="font-semibold text-sm">{{person.name}}</span>
          <span class="text-xs">{{person.userName}}</span>
        </div>
        <button class="items-left border border-gray-400 text-sm w-1/2 ">
          Follow
        </button>
      </div>
    </div>
    <!--close btn-->
    <button class="cursor-pointer mr-2 ">
      <fa icon="times" class="text-gray-800 " />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>

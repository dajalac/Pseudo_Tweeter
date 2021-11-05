<template>
  <div class="bg-gray-500 bg-opacity-50 flex items-center justify-center fixed bottom-0 left-0 right-0 top-0 ">
    <div
      class="bg-gray-800
     flex flex-col  gap-2 items-center justify-center
     rounded-lg pb-4 h-2/5 w-11/12 md:h-1/3 md:w-2/4"
      @click.stop
    >
      <div class="flex justify-start w-11/12">
        <img src="~assets/Twitter-ar21.svg">
      </div>
      <textarea
        class="border resize-none h-1/2 w-11/12"
        type="text"
        placeholder="What is in your mind?"
      />
      <div class="flex gap-10 justify-end w-10/12">
        <button
          class="border w-20 bg-gray-500 rounded-full"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button class="border w-20 bg-blue-700 rounded-full text-gray-300">
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>

</style>

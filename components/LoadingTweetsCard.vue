<template>
  <div class="flex flex-row gap-1 shadow-md w-full px-4 py-2 bg-white">
    <div class="animate-pulse flex space-x-4 w-full">
      <!-- avatar -->
      <div class="rounded-full flex bg-gray-300 h-16 w-16" />
      <!-- user info -->
      <div class="flex-1 flex-row justify-center items-center space-y-4 py-4 w-full">
        <!--name and user name -->
        <div class="flex flex-row gap-1 justify-start items-start w-full ">
          <div class="h-4 bg-gray-300  rounded w-3/4" />
        </div>
        <!-- tweeter area -->
        <div class="flex-1 space-y-2">
          <div class="h-4 bg-gray-300  rounded w-96" />
          <!--media-->
          <div class="flex space-y-2">
            <div class="h-20 bg-gray-300  rounded h-60 w-96"/>
          </div>
        </div>
        <!-- action buttons -->
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-300  rounded w-96" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

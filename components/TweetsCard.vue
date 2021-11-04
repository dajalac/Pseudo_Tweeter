<template>
  <div class="flex flex-row gap-1 shadow-md w-full px-4 py-2 ">
    <div class="flex flex-row justify-center intems-center w-16">
      <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" class="h-16 w-16">
    </div>
    <div class="flex flex-1 flex-col gap-3 ">
      <div class="h-2" />
      <div class="flex justify-start  items-center  gap-2">
        <span class="text-lg font-semibold">Jean doe </span>
        <span> @username</span>
      </div>
      <div class="flex flex-wrap text-sm text-justify">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Consectetur a labore itaque
        necessitatibus dolorem vitae accusantium. Laboriosam,
        necessitatibus magni voluptates dolores cupiditate ducimus
        corrupti vitae excepturi illo voluptatibus aliquid esse?
      </div>
      <div
        class=" flex
        flex-col
        justify-start
        gap-3
        pr-2 w-full
        items-center
        cursor-pointer
        text-gray-500 text-xs
        sm:flex-row
        sm:justify-between"
      >
        <div class="w-full">
          Expand
        </div>
        <div class="flex justify-start sm:justify-end w-full">
          <ul class="flex flex-row items-end gap-1 md:gap-4 md:items-center ">
            <li>
              <div class="flex flex-row justify-center items-center gap-1">
                <fa icon="reply" />
                <span>Reply</span>
              </div>
            </li>
            <li>
              <div class="flex flex-row justify-center items-center gap-1">
                <fa icon="retweet" />
                <span>Retweet</span>
              </div>
            </li>
            <li>
              <div class="flex flex-row justify-center items-center gap-1">
                <fa :icon="['far', 'star']" />
                <span>Favorite</span>
              </div>
            </li>
            <li>...More</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scope>

</style>

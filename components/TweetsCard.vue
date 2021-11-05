<template>
  <div class="flex flex-row gap-1 shadow-md w-full px-4 py-2 bg-white ">
    <!--profile image-->
    <div class="flex flex-row justify-center intems-center w-16">
      <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" class="rounded-full h-16 w-16">
    </div>
    <!--Tweet area-->
    <div class="flex flex-1 flex-col gap-3 ">
      <!--user info-->
      <div class="h-2" />
      <div class="flex gap-2 items-center justify-start">
        <span class="text-sm font-semibold // sm:text-lg">Jean doe </span>
        <span class=" text-xs  // sm:text-base   "> @username</span>
      </div>
      <!--tweet container-->
      <div class="flex flex-wrap text-justify text-sm -ml-16 mt-4 // sm:ml-0 sm:mt-0">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Consectetur a labore itaque
        necessitatibus dolorem vitae accusantium. Laboriosam,
        necessitatibus magni voluptates dolores cupiditate ducimus
        corrupti vitae excepturi illo voluptatibus aliquid esse?
      </div>
      <!-- card actions -->
      <div
        class="cursor-pointer
        flex
        flex-col
        gap-3
        items-center
        justify-start
        pr-2 w-full
        text-gray-500 text-xs
        -ml-16
        //
        sm:flex-row
        sm:justify-between sm:ml-0"
      >
        <div class="w-full">
          Expand
        </div>
        <div class="flex justify-start w-full // sm:justify-end">
          <ul class="flex flex-row gap-4 items-end // md:gap-4 md:items-center ">
            <li>
              <div class="flex flex-row gap-1 items-center  justify-center ">
                <fa icon="reply" />
                <span>Reply</span>
              </div>
            </li>
            <li>
              <div class="flex flex-row gap-1 items-center  justify-center">
                <fa icon="retweet" />
                <span>Retweet</span>
              </div>
            </li>
            <li>
              <div class="flex flex-row gap-1 items-center  justify-center">
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

<template>
  <div class="flex flex-col w-full shadow //">
    <!--bg imag-->
    <div class="hidden // sm:flex">
      <img
        src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg"
        alt="cover"
        class="h-32 w-full // "
      >
    </div>
    <!--user info container -->
    <div class="flex flex-row ml-4">
      <!--profile imag-->
      <div>
        <img
          src="https://www.bnl.gov/today/body_pics/2017/06/stephanhruszkewycz-hr.jpg"
          alt="Joe doe"
          class="rounded-full h-16 w-16 // sm:h-24 sm:w-24 sm:-mt-10"
        >
      </div>
      <!--user name-->
      <div class="flex flex-col ml-2 text-left">
        <h3 class="font-semibold">
          Joe doe
        </h3>
        <span class="text-sm"> @useraccount</span>
      </div>
    </div>
    <!--tweets info container -->
    <div class="hidden border-b border-gray-300 gap-3 mx-2 py-3 text-gray-500 text-xs  // md:flex">
      <div class="flex flex-col items-center justify-center ">
        <span>TWEETS</span>
        <span>2,409</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span>FOLLOWING</span>
        <span>200</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span>FOLLERS</span>
        <span>200</span>
      </div>
    </div>
    <!-- tweets input container -->
    <div
      class="border border-gray-400 divider-y ml-20 -mt-4 px-2 rounded-full w-3/5
            // sm:ml-6 sm:mt-1 sm:w-11/12 sm:mt-3 sm:mb-3 // md:ml-2"
    >
      <input
        type="text"
        placeholder="Compose new Tweet"
      >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

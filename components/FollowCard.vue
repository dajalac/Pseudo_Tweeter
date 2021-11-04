<template>
  <div class="flex gap-2 items-center justify-center p-2 shadow ">
    <!--photo-->
    <div>
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLQMxO5ybJytpgAsgyYDiMw2lrUpVGo1YZddOKEljQ=s900-c-k-c0x00ffffff-no-rj"
        alt="user"
        class="rounded-full h-16 w-16 //"
      >
    </div>
    <!--user suggestion-->
    <div class="flex flex-col gap-2 items-left justify-center mt-6">
      <div class="flex gap-1 items-center">
        <span class="font-semibold text-sm">Jim Smith</span>
        <span class="text-xs">@useraccount</span>
      </div>
      <button class="items-left border border-gray-400 text-sm w-1/2 ">Follow</button>
    </div>
    <!--close btn-->
    <fa icon="times" class="cursor-pointer fa-lg ml-4 text-gray-800 " />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

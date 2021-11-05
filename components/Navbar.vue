<template>
  <div class="flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-99 ">
    <div class="flex w-full justify-center items-center bg-gray-800 py-4 px-2">
      <nav class="fixedNavbar">
        <!--burger btn om mobile view -->
        <button class="flex md:hidden" @click="onClickBtn">
          <fa v-if="!showMenu" icon="bars" class="fa-lg" />
          <fa v-else icon="times" class="fa-lg text-gray-400 " />
        </button>
        <!-- menu options-->
        <ul class="hidden md:flex flex-row gap-6 cursor-pointer">
          <li>
            <NuxtLink to="/" class="flex flex-row justify-center items-center gap-1">
              <fa icon="home" />
              <span>Home</span>
            </NuxtLink >
          </li>
          <li>
            <div class="flex flex-row justify-center items-center gap-1">
              <fa icon="bell" />
              <span>Notifications</span>
            </div>
          </li>
          <li>
            <div class="flex flex-row justify-center items-center gap-1">
              <fa icon="hashtag" />
              <span>Discover</span>
            </div>
          </li>
          <li>
            <NuxtLink to="/user" class="flex flex-row justify-center items-center gap-1">
              <fa icon="user" />
              <span>Me</span>
            </NuxtLink>
          </li>
        </ul>
        <!--logo-->
        <ul class="flex flex-row justify-center items-center">
          <img src="~assets/Twitter-t-01.svg">
        </ul>
        <!--second menu-->
        <ul class="flex flex-row justify-center  items-center gap-4 cursor-pointer">
          <li><SearchBar /></li>
          <li class="hidden md:flex">
            <fa icon="comments" class=" fa-lg" />
          </li>
          <li class="hidden md:flex">
            <fa icon="cog" class=" fa-lg" />
          </li>
          <li class="hidden md:flex">
            <fa icon="pen" class=" fa-lg" />
          </li>
        </ul>
      </nav>
    </div>
    <!-- mobile menu -->
    <div v-if="showMenu" class="flex md:hidden w-full justify-center items-left z-100 bg-gray-100">
      <nav class="flex flex-col  justify-left gap-4 w-full text-gray-600 px-6 pt-3">
        <ul class="flex flex-col gap-4">
          <li class="menuMobile">
            <NuxtLink to="/">
              <fa icon="home" class=" fa-lg" />
              <span>Home</span>
            </NuxtLink>
          </li>
          <li class="menuMobile">
            <div>
              <fa icon="bell" class=" fa-lg" />
              <span>notifications</span>
            </div>
          </li>
          <li class="menuMobile">
            <div>
              <fa icon="hashtag" class=" fa-lg" />
              <span>Discover</span>
            </div>
          </li>
          <li class="menuMobile">
            <NuxtLink to="/user">
              <fa icon="user" class=" fa-lg" />
              <span>Me</span>
            </NuxtLink>
          </li>
          <li class="menuMobile">
            <div>
              <fa icon="comments" class=" fa-lg" />
              <span>chat</span>
            </div>
          </li>
          <li class="menuMobile">
            <div>
              <fa icon="cog" class=" fa-lg" />
              <span>Setting</span>
            </div>
          </li>
          <li class="menuMobile">
            <div>
              <fa icon="pen" class=" fa-lg" />
              <span>Theme</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data  () {
    return {
      showMenu: false
    }
  },
  methods: {
    onClickBtn () {
      this.showMenu = !this.showMenu
    }
  }

}
</script>

<style lang="postcss" scope>

.fixedNavbar{
  @apply flex
         flex-row
         justify-between
         items-center
         md:text-sm
         lg:text-base
         text-gray-300
         gap-4
         w-11/12
         md:w-10/12
}
.menuMobile {
  height: 40px;
  box-shadow:0 3px 2px -2px #d5d9dd;
  div{
    @apply flex flex-row justify-start items-center gap-2;
  }
  &:hover{
    @apply text-blue-900;
  }
}
</style>

<template>
  <div class="flex flex-row gap-1 shadow-md w-full px-4 py-2 bg-white ">
    <!--profile image-->
    <div class="flex flex-row justify-center intems-center w-16">
      <img v-bind:src="tweet.profilePhoto" alt="" class="rounded-full h-16 w-16">
    </div>
    <!--Tweet area-->
    <div class="flex flex-1 flex-col gap-3 ">
      <!--user info-->
      <div class="h-2" />
      <div class="flex gap-2 items-center justify-start">
        <span class="text-sm font-semibold // sm:text-sm">{{tweet.name}}</span>
        <span class=" text-xs  // sm:text-base   "> {{tweet.userName}}</span>
      </div>
      <!--tweet container-->
      <div class="flex flex-wrap text-justify text-sm -ml-16 mt-4 // sm:ml-0 sm:mt-0">
        {{tweet.tweet}}
      </div>
      <div v-if="tweet.postMedia" class="flex flex-row justify-center intems-center ">
        <img v-bind:src="tweet.postMedia" alt=" " class="">
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
              <div @click ="likePost" class="flex flex-row gap-1 items-center  justify-center">
                <div v-if="like" >
                  <fa :icon="['fas', 'star']" class="text-yellow-300" />
                </div>
                <div v-else >
                <fa :icon="['far', 'star']" />
              </div>
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
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      like: this.$props.tweet.liked
    }
  },
  like () {
    return this.$props.tweet.liked
  },

  methods: {
    likePost () {
      this.like = !this.like
      this.$store.dispatch('newFavorite', { id: this.$props.tweet.id })
    }
  }
}
</script>

<style lang="postcss" scope>

</style>

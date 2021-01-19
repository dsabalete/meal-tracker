<template>
  <!--  -->
  <div class="flex flex-col flex-grow space-y-12 text-blue-400 dark:bg-black">
    <ColorSwitch />

    <div class="logo mx-auto">
      <svg width="96" height="96" viewBox="0 0 24 24">
        <path
          d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"
        />
      </svg>
    </div>

    <div class="mx-auto">
      <h1 class="font-sans font-bold text-4xl">
        {{ title }}
      </h1>
    </div>

    <div
      class="p-4 w-2/3 mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-700 text-center"
    >
      <nuxt-link
        to="/login"
        class="text-blue-400 dark:text-blue-100 font-bold text-2xl"
      >
        Login
      </nuxt-link>
    </div>

    <div
      class="p-4 w-2/3 mx-auto shadow-lg rounded-lg bg-blue-400 dark:bg-blue-700 text-center"
    >
      <nuxt-link
        to="/createAccount"
        class="text-white dark:text-blue-100 font-bold text-2xl"
      >
        Create account
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ColorSwitch from '@/components/ColorSwitch'

export default {
  components: {
    ColorSwitch,
  },
  data() {
    return {
      title: 'MealTracker',
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.logo svg {
  fill: currentColor;
}
</style>

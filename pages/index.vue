<template>
  <div class="flex flex-col flex-grow space-y-12 text-blue-400 max-h-full">
    <ColorSwitch />

    <div class="logo mx-auto">
      <MealTrackerIcon class="w-96 h-96" />
    </div>

    <div class="mx-auto">
      <h1 class="font-sans font-bold text-4xl">MealTracker</h1>
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
import ColorSwitch from '@/components/ui/ColorSwitch'
import MealTrackerIcon from '@/assets/icons/restaurant.svg?inline'

export default {
  name: 'HomeView',
  components: {
    ColorSwitch,
    MealTrackerIcon,
  },
}
</script>

<style lang="scss" scoped>
.logo svg {
  fill: currentColor;
}
</style>

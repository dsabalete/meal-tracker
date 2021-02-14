<template>
  <header
    class="flex items-center justify-between p-1 text-blue-400 dark:bg-blue-main-800"
  >
    <nuxt-link class="flex items-center" to="/">
      <MealTrackerIcon class="w-10 h-10" />
      <h1 class="pt-4 text-2xl font-bold">Meal Tracker</h1>
    </nuxt-link>

    <nuxt-link class="md:hidden" to="/profile">
      <ProfileIcon />
    </nuxt-link>
  </header>
</template>

<script>
import MealTrackerIcon from '@/assets/icons/restaurant.svg?inline'

export default {
  name: 'Header',
  components: {
    MealTrackerIcon,
  },
}
</script>

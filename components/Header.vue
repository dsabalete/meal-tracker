<template>
  <header class="flex flex-row bg-gray-200 text-blue-400 dark:bg-gray-900">
    <MealTrackerIcon class="w-10 h-10 m-2" />
    <h1 class="pt-4 text-2xl font-bold">Meal Tracker</h1>
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

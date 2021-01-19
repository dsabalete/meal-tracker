<template>
  <header class="bg-gray-200 text-blue-400 dark:bg-gray-900 p-2">
    <MealTrackerIcon />
    <h1>Meal Tracker</h1>
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

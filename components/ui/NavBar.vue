<template>
  <div
    class="h-16 lg:h-20 bg-white text-blue-400 dark:bg-black dark:text-blue-600 flex justify-between"
  >
    <div class="flex">
      <nuxt-link to="/">
        <div class="p-2 md:p-4 lg:p-6">
          <MealTrackerIcon />
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="font-semibold text-xl pt-6 lg:text-4xl">Meal Tracker</div>
      </nuxt-link>
    </div>
    <div class="flex justify-end">
      <ProfileIcon />
      <div class="p-2 lg:p-4">
        <BugerIcon />
      </div>
    </div>
  </div>
</template>

<script>
import MealTrackerIcon from '@/assets/icons/restaurant.svg?inline'
import BugerIcon from '@/assets/icons/burger-menu.svg?inline'

export default {
  name: 'NavBar',
  components: {
    MealTrackerIcon,
    BugerIcon,
  },
}
</script>

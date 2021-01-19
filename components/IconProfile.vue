<template>
  <div v-if="!loggedIn" class="text-gray-400 mt-1 md:mt-3 lg:mt-6">
    <MealTrackerIcon />
  </div>
  <div v-else>
    <img :src="imgSrc" class="mt-4 rounded-full" />
  </div>
</template>

<script>
export default {
  components: {
    MealTrackerIcon: () => import('~/assets/icons/restaurant.svg?inline'),
  },
  data() {
    return {
      loggedIn: false,
      imgSrc: 'https://via.placeholder.com/50',
    }
  },
}
</script>

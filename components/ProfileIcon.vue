<template>
  <div v-if="!loggedIn" class="text-gray-400">
    <IconProfile />
  </div>
  <div v-else>
    <!-- TODO: Translate alt text -->
    <img :src="imgSrc" class="rounded-full" alt="User image" />
  </div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  data() {
    return {
      loggedIn: false,
      imgSrc: 'https://via.placeholder.com/50',
    }
  },
}
</script>

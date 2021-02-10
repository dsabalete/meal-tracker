<template>
  <div v-if="!loggedIn" class="text-gray-400">
    <UserProfileIcon />
  </div>
  <div v-else>
    <!-- TODO: Translate alt text -->
    <img :src="imgSrc" class="rounded-full" alt="User image" />
  </div>
</template>

<script>
import UserProfileIcon from '@/assets/icons/profile.svg?inline'

export default {
  components: {
    UserProfileIcon,
  },
  data() {
    return {
      loggedIn: false,
      imgSrc: 'https://via.placeholder.com/50',
    }
  },
}
</script>

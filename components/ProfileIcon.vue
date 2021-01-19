<template>
  <div v-if="!loggedIn" class="text-gray-400 mt-2 lg:mt-4">
    <UserProfileIcon />
  </div>
  <div v-else>
    <img :src="imgSrc" class="mt-4 rounded-full" />
  </div>
</template>

<script>
import UserProfileIcon from '@/assets/icons/profile-user.svg?inline'

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

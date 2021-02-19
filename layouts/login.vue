<template>
  <div class="bg-gradient-to-b from-white to-blue-400">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar'

export default {
  name: 'LoginLayout',
  components: {
    NavBar,
  },
}
</script>

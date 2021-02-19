<template>
  <header
    class="flex items-center justify-between p-1 text-blue-400 dark:bg-blue-main-800"
  >
    <nuxt-link class="flex items-center" to="/">
      <IconLogo width="32" height="32" />
      <h1 class="pt-2 text-2xl font-bold">Meal Tracker</h1>
    </nuxt-link>

    <nuxt-link class="md:hidden" to="/profile">
      <IconProfile width="32" height="32" icon-color="bg-gray-main-100" />
    </nuxt-link>
  </header>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo'
import IconProfile from '@/components/icons/IconProfile'

export default {
  name: 'Header',
  components: {
    IconLogo,
    IconProfile,
  },
}
</script>

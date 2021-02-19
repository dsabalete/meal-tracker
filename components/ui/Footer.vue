<template>
  <footer
    class="footer flex justify-around px-5 pt-2 text-gray-main-700 dark:text-gray-main-800 dark:bg-gray-main-1000"
  >
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="flex flex-col items-center"
      :class="`link-${$colorMode.preference}`"
    >
      <component :is="link.component" class="w-8 h-8" />
      <span>{{ link.name }}</span>
    </nuxt-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      { name: 'Inicio', url: '/', component: 'IconHome' },
      { name: 'Nuevo', url: '/add', component: 'IconAdd' },
      { name: 'Perfil', url: '/profile', component: 'IconProfile' },
    ],
  }),
  methods: {},
}
</script>

<style scoped>
.link-dark svg {
  fill: theme('colors.gray-main.800');
}
.link-light svg {
  fill: theme('colors.gray-main.700');
}
.nuxt-link-exact-active {
  color: theme('colors.gray-main.900');
}
.nuxt-link-exact-active.link-dark {
  color: theme('colors.white');
}
.nuxt-link-exact-active svg {
  fill: theme('colors.gray-main.900');
}
.nuxt-link-exact-active.link-dark svg {
  fill: theme('colors.white');
}
</style>

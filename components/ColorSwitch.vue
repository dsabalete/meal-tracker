<template>
  <div class="color-switch self-end p-2">
    {{ $colorMode.preference }}
    <IconDark
      v-if="$colorMode.preference !== 'dark'"
      class="cursor-pointer"
      @click="changeTheme('dark')"
    />
    <IconLight v-else class="cursor-pointer" @click="changeTheme('light')" />
  </div>
</template>

<script>
export default {
  name: 'ColorSwitch',
  components: {
    IconDark: () => import('~/assets/images/dark.svg?inline'),
    IconLight: () => import('~/assets/images/light.svg?inline'),
  },
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme
    },
  },
}
</script>

<style lang="scss" scoped>
.color-switch {
  width: 3rem;
  height: 3rem;
}
</style>

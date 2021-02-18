<template>
  <div class="color-switch p-2">
    <!-- {{ $colorMode.preference }} -->
    <IconDark
      v-if="$colorMode.preference !== 'dark'"
      class="cursor-pointer fill-white text-blue-400"
      @click="changeTheme('dark')"
    />
    <IconLight
      v-else
      class="cursor-pointer text-blue-100"
      @click="changeTheme('light')"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorSwitch',
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme
    },
  },
}
</script>

<style scoped>
.color-switch {
  width: 3rem;
  height: 3rem;
}
</style>

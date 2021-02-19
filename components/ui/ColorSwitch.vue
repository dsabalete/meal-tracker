<template>
  <div class="p-2">
    <!-- {{ $colorMode.preference }} -->
    <span v-if="$colorMode.preference !== 'dark'" @click="changeTheme('dark')">
      <LazyIconDark class="cursor-pointer w-6 h-6" />
    </span>

    <span v-else @click="changeTheme('light')">
      <LazyIconLight class="cursor-pointer fill-white text-white w-6 h-6" />
    </span>
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

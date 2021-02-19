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
import IconLight from '@/components/icons/IconLight'
import IconDark from '@/components/icons/IconDark'

export default {
  name: 'ColorSwitch',
  components: {
    IconLight,
    IconDark,
  },
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

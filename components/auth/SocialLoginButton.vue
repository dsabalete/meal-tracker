<template>
  <button
    class="rounded-full border py-2 px-6 flex items-center"
    :class="type"
    @click="$emit('click')"
  >
    <component :is="socialComponent" class="w-6 mr-2" />
    {{ text }}
  </button>
</template>

<script>
import IconGoogle from '@/components/icons/IconGoogle.vue'

export default {
  name: 'SocialLoginButton',
  components: {
    IconGoogle,
  },
  props: {
    type: {
      type: String,
      default: 'google',
      validate: (value) => ['google', 'github'].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    socialOptions: {
      google: 'IconGoogle',
    },
  }),
  computed: {
    socialComponent() {
      return this.socialOptions[this.type]
    },
  },
}
</script>

<style lang="scss" scoped>
.google {
  @apply bg-red-main-600 border-red-main-600 text-white;
}
</style>

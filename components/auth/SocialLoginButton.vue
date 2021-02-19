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
export default {
  name: 'AuthSocialLoginButton',
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
      github: 'IconGithub',
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
.github {
  @apply bg-gray-main-1000  border-white text-white;
}
</style>

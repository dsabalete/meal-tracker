<template>
  <div class="flex flex-col justify-around h-full">
    <div class="flex flex-col items-center mb-8">
      <AuthSocialLoginButton
        text="Sign in with google"
        @click="login('google')"
      />
      <AuthSocialLoginButton
        text="Sign in with github"
        type="github"
        class="mt-4 border-4 border-white"
        @click="login('github')"
      />
    </div>
    <div class="text-center">
      <p class="font-bold cursor-pointer" @click="showRegister()">Sign up</p>
      <p>Do you have an account? <b>Sign in</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLoginForm',
  methods: {
    login(type) {
      this.$emit('login', type)
    },
    showRegister() {
      this.$emit('show-register')
    },
  },
}
</script>

<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <ColorSwitch />
    </div>
    <h1 class="text-center text-3xl font-bold">Meal Tracker</h1>

    <div
      class="login-body mt-12 h-full flex flex-col justify-center items-center bg-light dark:bg-blue-main-800"
    >
      <SocialLoginButton
        text="Iniciar sesión con google"
        @click="loginWithGoogle"
      />
      <p>iniciar sesion con google</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  methods: {
    async loginWithGoogle() {
      try {
        const provider = new this.$fireModule.auth.GoogleAuthProvider()
        const result = await this.$fire.auth.signInWithPopup(provider)
        console.log(result)
      } catch (err) {
        // TODO: show toast
        // eslint-disable-next-lin
        console.error(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>

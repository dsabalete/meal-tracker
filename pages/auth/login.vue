<template>
  <div class="h-full overflow-x-hidden flex flex-col">
    <section>
      <div
        class="flex justify-end p-4"
        :class="{ 'justify-between': isRegisterMode }"
      >
        <p
          v-if="isRegisterMode"
          class="cursor-pointer text-3xl"
          @click="hideRegister()"
        >
          ⬅︎
        </p>
        <UiColorSwitch />
      </div>
      <h1 class="text-center text-3xl font-bold">Meal Tracker</h1>
    </section>

    <div class="login-body mt-12 h-full bg-light dark:bg-gray-main-1000">
      <AuthLoginForm
        v-if="!isRegisterMode"
        @login="loginWith"
        @show-register="showRegister()"
      />
      <AuthRegisterForm v-else @register="registerUser" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ROUTES } from '@/constants/routes'

export default {
  name: 'Login',
  layout: 'auth',
  data: () => ({
    isRegisterMode: false,
  }),
  methods: {
    ...mapMutations({
      setUser: 'authentication/setUser',
    }),
    loginWith(type) {
      type === 'google' ? this.loginWithGoogle() : this.loginWithGithub()
    },
    loginWithGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.loginPopup(provider)
    },
    loginWithGithub() {
      const provider = new this.$fireModule.auth.GithubAuthProvider()
      this.loginPopup(provider)
    },
    async loginPopup(provider) {
      try {
        const result = await this.$fire.auth.signInWithPopup(provider)
        const user = result.user
        this.setUser(user)
        this.$router.push(ROUTES.HOME)
      } catch (error) {
        // TODO: show toast
        // eslint-disable-next-line
        console.error('login error', error)
      }
    },
    showRegister() {
      this.isRegisterMode = true
    },
    hideRegister() {
      this.isRegisterMode = false
    },
    async registerUser(data) {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          data.email,
          data.pass
        )
        await this.updateNameUser(data.name)
        // eslint-disable-next-line
        console.log(this.$fire.auth.currentUser)
      } catch (error) {
        // eslint-disable-next-line
        console.error(error)
      }
    },
    updateNameUser(name) {
      const user = this.$fire.auth.currentUser
      user.updateProfile({
        displayName: name,
      })
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

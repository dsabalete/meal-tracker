<template>
  <div class="flex flex-col justify-around h-full">
    <div class="flex flex-col items-center mb-8">
      <AuthSocialLoginButton
        text="Iniciar sesión con google"
        @click="login('google')"
      />
      <AuthSocialLoginButton
        text="Iniciar sesión con github"
        type="github"
        class="mt-4 border-4 border-white"
        @click="login('github')"
      />
    </div>
    <div class="text-center">
      <p class="font-bold cursor-pointer" @click="showRegister()">Regístrate</p>
      <p>¿Ya tienes una cuenta? <b>Iniciar sesión</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
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

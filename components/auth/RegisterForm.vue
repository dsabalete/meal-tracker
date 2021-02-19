<template>
  <section class="flex flex-col items-center justify-center pt-4">
    <h1 class="text-center text-2xl">Register</h1>
    <form class="mt-12 register-form" @submit.prevent>
      <UiInput v-model="form.name" text="Nombre" name="name" />
      <UiInput
        v-model="form.email"
        text="Email"
        name="name"
        type="email"
        class="mt-4"
      />
      <UiInput
        v-model="form.pass"
        text="Contraseña"
        name="name"
        type="password"
        class="mt-4"
      />

      <UiButton class="mt-6" @click="registerUser()">Register</UiButton>
    </form>
  </section>
</template>

<script>
export default {
  name: 'RegisterForm',
  data: () => ({
    form: {
      name: '',
      email: '',
      pass: '',
    },
  }),
  methods: {
    registerUser() {
      this.$emit('register', { ...this.form })
    },
  },
}
</script>

<style scoped>
.register-form {
  width: 40%;
}
</style>

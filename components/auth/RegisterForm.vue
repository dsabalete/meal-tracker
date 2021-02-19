<template>
  <section class="flex flex-col items-center justify-center pt-4">
    <h1 class="text-center text-2xl">Sign Up</h1>
    <form class="mt-12 register-form" @submit.prevent>
      <UiInput v-model="form.name" text="Name" name="name" />
      <UiInput
        v-model="form.email"
        text="Email"
        name="name"
        type="email"
        class="mt-4"
      />
      <UiInput
        v-model="form.pass"
        text="Password"
        name="name"
        type="password"
        class="mt-4"
      />

      <UiButton class="mt-6" @click="registerUser()">Send</UiButton>
    </form>
  </section>
</template>

<script>
export default {
  name: 'AuthRegisterForm',
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

<template>
  <section class="flex flex-col items-center justify-center pt-4">
    <h1 class="text-center text-2xl">Regístrate</h1>
    <form class="mt-12 register-form" @submit.prevent>
      <Input v-model="form.name" text="Nombre" name="name" />
      <Input
        v-model="form.email"
        text="Email"
        name="name"
        type="email"
        class="mt-4"
      />
      <Input
        v-model="form.pass"
        text="Contraseña"
        name="name"
        type="password"
        class="mt-4"
      />

      <Button class="mt-6" @click="registerUser()">Regístrate</Button>
    </form>
  </section>
</template>

<script>
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
export default {
  name: 'RegisterForm',
  components: { Input, Button },
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

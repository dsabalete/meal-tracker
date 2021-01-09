<template>
  <!-- <button>
            Login with Google
        </button>

        <div>OR</div>
        -->

  <div class="flex flex-col justify-start bg-gray-100 h-screen w-full pt-32">
    <div
      v-if="error"
      class="font-bold block w-2/3 mx-auto text-red-600 text-center"
    >
      {{ error }}
    </div>
    <input
      v-model="user.email"
      type="text"
      placeholder="email"
      class="form-input block w-2/3 rounded-lg border-4 mt-7 p-4 self-center text-center focus:outline-none focus:border-blue-500"
      :class="error ? 'border-red-600' : 'border-blue-400'"
      @change="error = null"
    />
    <input
      v-model="user.password"
      type="password"
      placeholder="password"
      class="form-input block w-2/3 rounded-lg border-4 sd mt-7 p-4 self-center text-center focus:outline-none focus:border-blue-500"
      :class="error ? 'border-red-600' : 'border-blue-400'"
      @change="error = null"
    />
    <button
      class="form-input block w-2/3 rounded-lg mt-7 p-4 self-center bg-white shadow-md font-bold text-xl focus:outline-none"
      :class="error ? 'bg-red-600 text-white' : 'text-blue-400'"
      @click="login"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'login',
  data() {
    return {
      error: null,
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      if (this.user.email === 'test' && this.user.password === 'test') {
        this.$router.push('main')
      } else {
        this.error = 'User or password not valid'
      }
    },
  },
}
</script>

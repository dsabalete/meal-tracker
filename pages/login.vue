<template>
  <!-- <button>
            Login with Google
        </button>

        <div>OR</div>
        -->

  <div class="flex flex-col justify-start bg-gray-100 h-full w-full pt-32">
    <div
      v-if="error"
      class="font-bold block w-2/3 mx-auto text-red-600 text-center"
    >
      {{ error }}
    </div>
    <input
      v-model="form.email"
      type="text"
      placeholder="Enter email"
      class="form-input block w-2/3 rounded-lg border-4 mt-8 p-4 self-center text-center focus:outline-none focus:border-blue-500"
      :class="error ? 'border-red-600' : 'border-blue-400'"
      @change="error = null"
    />
    <input
      v-model="form.password"
      type="password"
      placeholder="Enter password"
      class="form-input block w-2/3 rounded-lg border-4 sd mt-8 p-4 self-center text-center focus:outline-none focus:border-blue-500"
      :class="error ? 'border-red-600' : 'border-blue-400'"
      @change="error = null"
    />
    <button
      class="form-input block w-2/3 rounded-lg mt-8 p-4 self-center bg-white shadow-md font-bold text-xl focus:outline-none"
      :class="error ? 'bg-red-600 text-white' : 'text-blue-400'"
      @click="login"
    >
      Login
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  layout: 'login',
  data() {
    return {
      error: null,
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters('Login', ['user', 'imgProfile', 'initials']),
  },
  methods: {
    ...mapActions('Login', ['logout', 'login']),
    // async login() {
    //   try {
    //     await this.$fire.auth.createUserWithEmailAndPassword(
    //       this.user.email,
    //       this.user.password
    //     )
    //     await this.$router.push('main')
    //   } catch (e) {
    //     this.error = 'Email or password not valid'
    //   }
    // },
  },
}
</script>

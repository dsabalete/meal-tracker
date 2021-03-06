import Vue from 'vue'

const components = [
  './components/icon/Logo.vue',
  './components/icon/Google.vue',
  './components/ui/ColorSwitch.vue',
  './components/auth/SocialLoginButton.vue',
  './components/auth/LoginForm.vue',
]

components.forEach((path) => {
  const name = path.match(/(\w*)\.vue$/)[1]
  Vue.component(name, require(path).default)
})

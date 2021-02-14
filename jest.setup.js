import Vue from 'vue'

const components = [
  './components/ColorSwitch.vue',
  './components/SocialLoginButton.vue',
]

components.forEach((path) => {
  const name = path.match(/(\w*)\.vue$/)[1]
  Vue.component(name, require(path).default)
})

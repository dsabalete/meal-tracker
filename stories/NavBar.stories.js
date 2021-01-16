import NavBar from '~/components/NavBar.vue'

export default {
  title: 'NavBar',
  component: NavBar,
}

export const SimpleNavBar = () => ({
  components: { NavBar },
  template: '<NavBar />',
})
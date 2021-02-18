import Header from '../components/ui/Header.vue'

export default {
  title: 'UI/Header',
  component: Header,
}

const Template = () => ({
  components: { Header },
  template: '<Header />',
})

export const Default = Template.bind({})

import IconLogo from '~/components/icon/Logo.vue'

const Template = (args, { argTypes }) => ({
  components: { IconLogo },
  props: Object.keys(argTypes),
  template: '<IconLogo :iconColor="currentColor" />',
})

export default {
  title: 'Icon/Logo',
  component: IconLogo,
  args: {
    iconColor: 'currentColor',
  },
  argTypes: {
    iconColor: { control: 'color' },
  },
}

export const Default = Template.bind({})
Default.args = {
  iconColor: 'red',
}

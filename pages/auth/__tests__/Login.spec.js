import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import LoginView from '@/pages/auth/login.vue'

const build = (props) => {
  const wrapper = shallowMount(LoginView, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: { ...props },
  })
  return wrapper
}

describe('Login View', () => {
  test('should be rendered', () => {
    const wrapper = build()
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should match snapshot', () => {
    const wrapper = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('should have a ColorSwitch component', () => {
    const wrapper = build()
    const colorSwitch = wrapper.findComponent({ name: 'ColorSwitch' })
    expect(colorSwitch.exists()).toBeTruthy()
  })

  test('should have a LoginForm when not in register mode', () => {
    const wrapper = build({ isRegisterMode: false })
    const form = wrapper.findComponent({ name: 'LoginForm' })
    expect(form.exists()).toBeTruthy()
  })

  xtest('should have a RegisterForm when in register mode', () => {
    const wrapper = build({ isRegisterMode: true })
    const form = wrapper.findComponent({ name: 'RegisterForm' })
    expect(form.exists()).toBeTruthy()
  })
})

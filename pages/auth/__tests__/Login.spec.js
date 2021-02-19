import { mount, RouterLinkStub } from '@vue/test-utils'
import LoginView from '@/pages/auth/login.vue'

const build = (props) => {
  const wrapper = mount(LoginView, {
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

  // test('should have a ColorSwitch component', () => {
  //   const wrapper = build()
  //   const colorSW = wrapper.findComponent({ name: 'UiColorSwitch' })
  //   expect(colorSW.exists()).toBeTruthy()
  // })

  // test('should have a LoginForm when not in register mode', () => {
  //   const wrapper = build({ isRegisterMode: false })
  //   const form = wrapper.findComponent({ name: 'AuthLoginForm' })
  //   expect(form.exists()).toBeTruthy()
  // })
})

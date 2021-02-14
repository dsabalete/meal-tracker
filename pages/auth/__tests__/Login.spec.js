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

  test('should have a social login button', () => {
    const wrapper = build()
    const socialButton = wrapper.findComponent({ name: 'SocialLoginButton' })
    expect(socialButton.exists()).toBeTruthy()
  })
})

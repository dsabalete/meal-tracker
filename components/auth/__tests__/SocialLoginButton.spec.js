import { mount } from '@vue/test-utils'
import SocialLoginButton from '@/components/auth/SocialLoginButton.vue'

const build = (props) =>
  mount(SocialLoginButton, {
    propsData: {
      ...props,
    },
  })

describe('SocialLoginButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = build({
      text: 'asdf',
    })
  })

  test('should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})

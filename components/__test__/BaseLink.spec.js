import { mount } from '@vue/test-utils'
import BaseLink from '@/components/BaseLink.vue'

const build = (props) => {
  const wrapper = mount(BaseLink, {
    propsData: {
      ...props,
    },
  })

  return {
    wrapper,
    find: wrapper.find,
  }
}

describe('BaseLink', () => {
  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })
})

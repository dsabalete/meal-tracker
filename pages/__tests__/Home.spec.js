import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import HomeView from '@/pages/index.vue'

const build = (props) => {
  const wrapper = shallowMount(HomeView, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: { ...props },
  })
  return { wrapper }
}

describe('Home View', () => {
  test('should be rendered', () => {
    const { wrapper } = build()
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('', () => {})
})

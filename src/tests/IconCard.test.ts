import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import IconCard from '@/components/IconCard.vue'
import testSVG from '@/assets/tests/TestSvg.vue'

test('test icon card component', async () => {
  expect(IconCard).toBeTruthy()

  const svgGetter = () => wrapper.find('[data-test="svg"]')
  const buttonGetter = () => wrapper.find('[data-test="button"]')
  const wrapper = mount(IconCard, {
    props: {
      name: 'test name',
    }
  })

  expect(wrapper.text()).toContain('test name')
  // button should not be rendered unless it has a link and title
  expect(buttonGetter().exists()).toBe(false)
  // svg is not present
  expect(svgGetter().exists()).toBe(false)

  await wrapper.setProps({ link: 'https://test.link/', username: 'test username' })

  expect(buttonGetter().exists()).toBe(true)
  expect(buttonGetter().text()).toContain('test username')

  await wrapper.setProps({ svgIcon: testSVG })

  expect(svgGetter().exists()).toBe(true)
})

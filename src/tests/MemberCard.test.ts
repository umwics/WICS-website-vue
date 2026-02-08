import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import testImage from '@/assets/tests/test_image.png'
import MemberCard from '@/components/MemberCard.vue'

test('test member card component', async () => {
  expect(MemberCard).toBeTruthy()

  const svgGetter = () => wrapper.find('[data-test="svg"]')
  const buttonGetter = () => wrapper.find('[data-test="button"]')
  const wrapper = mount(MemberCard, {
    props: {
      member: {
        image: testImage,
        name: 'test name'
      }
    }
  })

  expect(wrapper.text()).toContain('test name')
  // button should not be rendered unless it has a link and title
  expect(buttonGetter().exists()).toBe(false)
  // svg is not present
  expect(svgGetter().exists()).toBe(false)

  await wrapper.setProps({ socialMedia: { link: 'https://test.link/', username: 'test username' } })

  expect(buttonGetter().exists()).toBe(true)
  expect(buttonGetter().text()).toContain('test username')

  //await wrapper.setProps({ socialMedia: { svgIcon: testSVG } })

  expect(svgGetter().exists()).toBe(true)
})

import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import testImage from '@/assets/tests/test_image.png'
import MemberCard from '@/components/MemberCard.vue'

test('test member card component', async () => {
  expect(MemberCard).toBeTruthy()

  const pronounsGetter = () => wrapper.find('[data-test="pronouns"]')
  const descriptionGetter = () => wrapper.find('[data-test="description"]')
  const wrapper = mount(MemberCard, {
    props: {
      altImage: 'test alt text',
      image: testImage,
      name: 'test name',
      position: 'test position',
      memberType: 'test member type'
    }
  })

  expect(wrapper.text()).toContain('test member type')
  expect(wrapper.text()).toContain('test position')
  expect(wrapper.text()).toContain('test name')

  expect(wrapper.find('[data-test="image"]').attributes('alt')).toBe('test alt text')
  // pronouns + description should not be rendered
  expect(pronounsGetter().exists()).toBe(false)
  expect(descriptionGetter().exists()).toBe(false)

  // add optionals
  await wrapper.setProps({ ...wrapper.props, pronouns: 'test pronouns' })

  expect(pronounsGetter().text()).toContain('test pronouns')

  await wrapper.setProps({ ...wrapper.props, description: 'test description' })

  expect(descriptionGetter().text()).toContain('test description')
})

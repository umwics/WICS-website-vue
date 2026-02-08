import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CardComponent from '../components/CardComponent.vue'

test('test card component', async () => {
  // test that component exists
  expect(CardComponent).toBeTruthy()

  const wrapper = mount(CardComponent, {
    props: {
      title: 'Test Title'
    }
  })

  // title element should be rendered
  expect(wrapper.text()).toContain('Test Title')

  // divider should not be rendered unless there is a title and description
  const sectionDivider = '[data-test="divider"]'
  expect(wrapper.find(sectionDivider).exists()).toBe(false)

  // add description
  await wrapper.setProps({ ...wrapper.props(), description: 'Test Description' })

  // description should be present and divider should be inserted
  expect(wrapper.text()).toContain('Test Description')
  expect(wrapper.find(sectionDivider).exists()).toBe(true)

  // image element should not exist
  const image = '[data-test="image"]'
  expect(wrapper.find(image).exists()).toBe(false)

  // add image
  await wrapper.setProps({ ...wrapper.props(), image: 'src/assets/tests/test_image.png' })

  // image element should now exist
  expect(wrapper.find(image).exists()).toBe(true)
  expect(wrapper.find('[class="image-position--top"]').exists()).toBe(true)
  expect(wrapper.find('[class="image-position--side"]').exists()).toBe(false)

  await wrapper.setProps({ ...wrapper.props(), imagePosition: 'side' })

  expect(wrapper.find('[class="image-position--side"]').exists()).toBe(true)
})

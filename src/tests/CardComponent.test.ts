import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CardComponent from "../components/CardComponent.vue";

test("test card component", async () => {
  // test that component exists
  expect(CardComponent).toBeTruthy()

  let props = {
    title: 'Test Title'
  }

  const wrapper = mount(CardComponent, { props: props })

  // title element should be rendered
  expect(wrapper.text()).toContain('Test Title')

  // divider should not be rendered unless there is a title and description
  const sectionDivider = '[class="section-divider"]'
  expect(wrapper.find(sectionDivider).exists()).toBe(false)

  // @ts-ignore add description
  props = { ...props, description: 'Test Description' }
  await wrapper.setProps(props)

  // description should be present and divider should be inserted
  expect(wrapper.text()).toContain('Test Description')
  expect(wrapper.find(sectionDivider).exists()).toBe(true)

  // image element should not exist
  const image = '[class="card-img"]'
  expect(wrapper.find(image).exists()).toBe(false)

  // @ts-ignore add image
  props = { ...props, image: 'src/assets/tests/test_image.png' }
  await wrapper.setProps(props)

  // image element should now exist
  expect(wrapper.find(image).exists()).toBe(true)
});

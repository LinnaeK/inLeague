import { mount } from '@vue/test-utils
import  MainLayout from '../..src/Layout/MainLayout'

describe('Main Layout ', () => {
  test('includes a header', () => {
    const wrapper = mount(MainLayout)
    expect(wrapper.text()).toContain('inLeague')
  })
})
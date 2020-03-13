/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Index from '../../../src/pages/Index'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar, date } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Mount Index', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  const wrapper = mount(Index, {
    localVue
  })
  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('contains two input tags', () => {
    expect(wrapper.findAll('input').length.toBe(2))
  })

  it('triggers authenticate function when submit button is clicked', async () => {
    wrapper.find("button").trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.methods.authenticate.toBeCalled())
  })

//   it('sets index state to username input values', async () => {
//     wrapper.find("[data-username]").setValue("alice")
//     await wrapper.vm.$nextTick()
//     expect(wrapper.vm.username.toBe("alice"))
//   })

//   it('sets index state to password input values', async () => {
//     wrapper.find("[data-password]").setValue("1234")
//     await wrapper.vm.$nextTick()
//     expect(vm.password.toBe("1234"))
//   })
})

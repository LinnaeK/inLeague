/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import Vuex from "vuex"

import { createLocalVue, shallowMount } from '@vue/test-utils'
import Error from '../../../src/components/Error'
import * as All from 'quasar'

const { Quasar } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

const localVue = createLocalVue()
localVue.use(Quasar, {components})
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    error: [
      "Request validation failure",
      "The 'username' has an invalid type, expected type is email",
      "The 'password' value is not in the required size range (5..90)"
    ],
    status: 400
  }
})

describe('Error.vue', () => {
  const wrapper = shallowMount(Error, {
    localVue, 
    store
  })

  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('contains unorder list for errors', () => {
    expect(wrapper.findAll('ul').length).toBe(1)
  })
  
  it('displays error messages in store', () => {
  expect(wrapper.text()).toContain("We got an 400 error:")
  expect(wrapper.find(".list").text()).toBe("Request validation failure")    
  expect(wrapper.findAll(".list").length).toBe(3)    
  })
 
})




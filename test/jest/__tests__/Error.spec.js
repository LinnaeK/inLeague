/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import Vue from "vue";
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
    error: ["Invalid or Missing Authentication Credentials"],
    status: 401
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
  expect(wrapper.text()).toContain("We got an 401 error:")
  expect(wrapper.find(".list").text()).toBe("Invalid or Missing Authentication Credentials")    
})
 
})




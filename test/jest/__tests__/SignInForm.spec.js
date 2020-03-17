/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import Vue from "vue";
import Vuelidate from "vuelidate";
import flushPromises from "flush-promises"

Vue.use(Vuelidate);
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import SignInForm from '../../../src/components/SignInForm'
import * as All from 'quasar'

const { Quasar } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Mount Quasar', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, {components})

  const callAuthenticate = jest.fn()
  
  const wrapper = mount(SignInForm, {
      localVue,
      propsData: { callAuthenticate }
    })

  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('contains two input tags', () => {
    expect(wrapper.findAll('input').length).toBe(2)
  })

  it('triggers authenticate function when submit button is clicked', async () => {
    wrapper.setMethods({ callAuthenticate:jest.fn() })
    expect(wrapper.find('button').exists()).toBe(true)
    const submitButton = wrapper.find('button')
    submitButton.trigger('click')
    await flushPromises()
    expect(wrapper.vm.callAuthenticate).toHaveBeenCalledTimes(1)
  })
 
})


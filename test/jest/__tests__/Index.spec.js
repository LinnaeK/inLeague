/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import Vue from "vue";
import Vuelidate from "vuelidate";
import VueRouter from 'vue-router'

Vue.use(Vuelidate);
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Index from '../../../src/pages/Index'
import MainLayout from '../../../src/layouts/MainLayout'
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

describe('Mount Quasar', () => {
  // let mockedAuthenticate = jest.fn()
  // Index.methods.authenticate = mockedAuthenticate
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  localVue.use(Quasar, {components})
  const routes = [{ path: '/Index', component: Index }]

  const router = new VueRouter({
    routes
  })
  
  
  const wrapper = mount(Index, {
      parentComponent: MainLayout,
      localVue, 
      router,
      // parentComponent: MainLayout
    })

    console.log(wrapper.html())

  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('contains two input tags', () => {
    expect(wrapper.findAll('input').length).toBe(2)
  })

  it('triggers authenticate function when submit button is clicked', async () => {
    // const authenticateMock = jest.fn()
    const spy = jest.spyOn(vm, "authenticate")
    // wrapper.setMethods({ authenticate: authenticateMock })
    wrapper.find('button').trigger('click')
    // await Vue.nextTick()
    // expect(authenticateMock).toHaveBeenCalled()
    expect(spy).toHaveBeenCalled()
  })
 
})

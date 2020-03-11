import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jwt: '',
    userData: ''
  },
  mutations: {
    addUserData (state, payload) {
      console.log('in addUserpayload')
      state.jwt = payload.jwt
      state.userData = payload.userData
    }
  }
})

export default store

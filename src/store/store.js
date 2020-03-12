import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jwt: '',
    userData: '',
    error: '',
    status
  },
  mutations: {
    addUserData (state, payload) {
      console.log('in addUserpayload')
      state.jwt = payload.jwt
      state.userData = payload.userData
    },
    addError (state, error) {
      const errorList = error.data.messages

      if (error.data.data.username) {
        const usrArr = error.data.data.username
        for (let i = 0; i < usrArr.length; i++) {
          if (usrArr[i].MESSAGE) {
            errorList.push(usrArr[i].MESSAGE)
          }
        }
      }

      if (error.data.data.password) {
        const pwdArr = error.data.data.password
        for (let i = 0; i < pwdArr.length; i++) {
          if (pwdArr[i].MESSAGE) {
            errorList.push(pwdArr[i].MESSAGE)
          }
        }
      }
      console.log(error.status)
      state.error = errorList
      state.status = error.status
    }
  }
})

export default store

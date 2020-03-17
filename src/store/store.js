import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jwt: '',
    userData: '',
    error: '',
    status: ''
  },
  getters: {
    jwt: (state) => {
      return state.jwt
    },
    userData: (state) => {
      return state.userData
    },
    error: (state) => {
      return state.error
    },
    status: (state) => {
      return state.status
    }
  },
  mutations: {
    userData (state, userData) {
      state.userData = userData
    },
    jwt (state, jwt) {
      state.jwt = jwt
    },
    error (state, errorList) {
      state.error = errorList
    },
    status (state, status) {
      state.status = status
    }
  },
  actions: {
    authenticate ({ commit, state }, payload) {
      return new Promise(
        (resolve, reject) => {
          if (!payload.errors) {
            axios.post('https://demo.inleague.io/api/v1/authenticate',
              {
                username: payload.username,
                password: payload.password
              })
              .then((response) => {
                commit('userData', response.data.data.userData)
                commit('jwt', response.data.data.jwt)
                resolve()
              })
              .catch((error) => {
                if (error.response && error.response.status < 500) {
                  this.dispatch('extractError', error.response)
                  reject()
                } else {
                  if (error.data) {
                    commit('error', error)
                    commit('status', error.response.status)
                  }
                  reject()
                }
              })
          }
        })
    },
    extractError (state, error) {
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
      store.commit('status', error.status)
      store.commit('error', errorList)
    }
  }
})

export default store

<template>
  <q-page class="flex flex-center">
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 800px">

      <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
    <q-input color="primary" filled label="Username" class="form__input" v-model.trim="$v.username.$model">
        <template v-if="username" v-slot:append>
          <q-icon name="cancel" @click.stop="username = null" class="cursor-pointer" />
        </template>
      </q-input>
      </div>
      <div v-if="errors">
        <div class="error" v-if="!$v.username.required">Username is required</div>
        <div class="error" v-if="!$v.username.email">Username must be a valid e-mail address</div>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
      <q-input color="primary" filled v-model="password" label="Password" class="form__input" v-model.trim="$v.password.$model">
        <template v-if="password" v-slot:append>
          <q-icon name="cancel" @click.stop="password = null" class="cursor-pointer" />
        </template>
      </q-input>
      </div>

      <div v-if="errors">
        <div class="error" v-if="!$v.password.required">Password is required</div>
        <div class="error" v-if="!$v.password.minLength">Password must be at least 5 characters</div>
        <div class="error" v-if="!$v.password.hasLetter">Password must contain at least 1 letter</div>
        <div class="error" v-if="!$v.password.hasNumber">Password must contain at least 1 number</div>
      </div>

      <q-btn color="primary" label="Submit" @click="authenticate"/>

    </div>
  </div>
    </template>
  </q-page>
</template>

<script>
import store from '../store/store'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { hasLetter, hasNumber } from '../validators'

export default {
  name: 'PageIndex',
  store,
  data () {
    return {
      username: '',
      password: '',
      errors: false
    }
  },
  validations: {
    username: {
      required,
      email
    },
    password: {
      required,
      hasLetter,
      hasNumber,
      minLength: minLength(5)
    }
  },
  methods: {
    authenticate () {
      console.log(this.$v.$anyError)
      this.errors = this.$v.$anyError
      console.log('authenticate ran')
      if (!this.errors) {
        this.$axios.post('https://demo.inleague.io/api/v1/authenticate',
          {
            username: this.username,
            password: this.password
          })
          .then((response) => {
            console.log('got by', response)
            store.commit('addUserData', { jwt: response.data.data.jwt, userData: response.data.data.userData })
            this.$router.push('home')
            // this.jwt = response.data.data.jwt
            // this.userData = response.data.data.userData
          })
          .catch((error) => {
            if (error.response && error.response.status < 500) {
              console.log('less than 500', error.response.data.messages)
              store.commit('addError', error.response)
              this.$router.push('error')
            } else {
              if (error.data) {
                store.commit('addError', error)
              }
              console.log('500+ error', JSON.stringify(error))
              this.$router.push('connectionerror')
            }
          })
      }
    }
  }
}
</script>

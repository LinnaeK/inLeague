<template>
  <q-page class="flex flex-center">
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 800px">

      <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
    <q-input color="primary" filled label="Username" class="form__input" v-model.trim="$v.username.$model" data-username>
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
      <q-input color="primary" filled v-model="password" label="Password" class="form__input" v-model.trim="$v.password.$model" data-input>
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

      <q-btn color="primary" label="Submit" @click="callAuthenticate" data-btn/>

    </div>
  </div>
    </template>
  </q-page>
</template>

<script>
import store from '../store/store'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { hasLetter, hasNumber } from '../validators'
import { mapActions } from 'vuex'

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
    ...mapActions([
      'authenticate'
    ]),
    callAuthenticate: function () {
      store.dispatch('authenticate', {
        username: this.username,
        password: this.password,
        errors: this.errors
      })
        .then(response => {
          this.$router.push('home')
        })
        .catch(response => {
          console.log('in catch', store.getters.status)
          if (store.getters.status && store.getters.status < 500) {
            this.$router.push('error')
          } else {
            this.$router.push('connectionerror')
          }
        })
    }
  }
}
</script>

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
        <q-input color="primary" filled v-model="password" label="Password" class="form__input" v-model.trim="$v.password.$model" data-password>
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

      <q-btn color="primary" label="Submit" @click="callAuthenticate" data-btn ref="submitBtn"/>

    </div>
  </div>
</template>

<script>
import store from '../store/store'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { hasLetter, hasNumber } from '../validators'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SignInForm',
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
  computed: {
    ...mapState([
      'status'
    ])
  },
  methods: {
    ...mapActions([
      'authenticate'
    ]),
    callAuthenticate: function () {
      this.errors = this.$v.$anyError
      if (!this.errors) {
        store.commit('status', '')
        store.commit('error', '')
        store.commit('jwt', '')
        store.commit('userData', '')
        store.dispatch('authenticate', {
          username: this.username,
          password: this.password,
          error: this.error
        })
          .then(response => {
            this.$router.push('home')
          })
          .catch(response => {
            if (this.$store.getters.status && this.$store.getters.status < 500) {
              this.$router.push('error')
            } else {
              this.$router.push('connectionerror')
            }
          })
      }
    }
  }
}
</script>

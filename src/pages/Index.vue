<template>
  <q-page class="flex flex-center">
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 800px">

    <q-input color="primary" filled v-model="username" label="Username">
        <template v-if="username" v-slot:append>
          <q-icon name="cancel" @click.stop="username = null" class="cursor-pointer" />
        </template>
      </q-input>

      <q-input color="primary" filled v-model="password" label="Password">
        <template v-if="password" v-slot:append>
          <q-icon name="cancel" @click.stop="password = null" class="cursor-pointer" />
        </template>
      </q-input>

      <q-btn color="primary" label="Submit" @click="authenticate"/>

      <div>{{ $store.state.jwt }}</div>
      <div>{{ $store.state.userData }}</div>

    </div>
  </div>
    </template>
  </q-page>
</template>

<script>
import store from '../store/store'

export default {
  name: 'PageIndex',
  store,
  data () {
    return {
      username: '',
      password: '',
      jwt: '',
      userData: '',
      test: ''
    }
  },
  methods: {
    authenticate () {
      console.log('authenticate ran')
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
        .catch((response) => {
          console.log('been caught', response)
          this.userData = response
        })
    }
  }
}
</script>

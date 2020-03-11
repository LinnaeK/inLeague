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

      <div>{{ jwt }}</div>
      <div>{{ userData }}</div>
      <div>{{ test }}</div>

    </div>
  </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
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
      this.$axios.post('https://demo.inleague.io/api/v1/authenticate',
        {
          username: this.username,
          password: this.password
        })
        .then((response) => {
          this.jwt = response.data.data.jwt
          this.userData = response.data.data.userData
        })
        .catch((response) => {
          this.userData = response
        })
    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <template>
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 400px">
        <template>
          <div>{{ jwt }}</div>
          <div>{{ userData }}</div>
        </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LoggedIn',
  computed: {
    ...mapState([
      'userData',
      'jwt'
    ])
  }
}
</script>

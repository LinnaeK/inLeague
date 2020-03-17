<template>
  <div class="q-pa-md">
    <template>
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 400px">
        <template>
          <div class="flex mb-4 max-w-lg flex-wrap">
            <div class="w-full bg-gray-500 h-auto break-words">JWT: {{ jwt }}</div>
          </div>

          <div class="flex mb-4 max-w-lg" v-for="(data, key) in userData" :key="userData[data]">
            <div class="w-1/2 bg-gray-400 max-h-auto min-h-12">{{ key }}</div>
            <div class="w-1/2 bg-gray-500 max-h-auto min-h-12">{{ data }}</div>
          </div>

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

<template>
  <q-page class="flex flex-center">
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 800px">
      <div>We got a {{ $store.state.status }} error:</div>
      <ul>
        <li style="list-style: none" v-for="error in $store.state.error" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
    </template>
  </q-page>
</template>

<script>
import store from '../store/store'
export default {
  name: 'LoggedIn',
  store
}
</script>

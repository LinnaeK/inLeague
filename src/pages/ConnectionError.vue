<template>
  <q-page class="flex flex-center">
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 800px">
      <div>We got a Connection Error!</div>
      <div>{{ $store.getters.status }}</div>
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

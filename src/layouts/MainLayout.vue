<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" exact>
            inLeague Login
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import store from '../store/store'

export default {
  name: 'MainLayout',
  store,

  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

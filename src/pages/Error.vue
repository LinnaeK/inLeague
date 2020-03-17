<template>
  <q-page class="flex flex-center">
        <Error />
  </q-page>
</template>

<script>
import store from '../store/store'
import Error from '../components/Error'
export default {
  name: 'ErrorPage',
  store,
  components: {
    Error
  }
}
</script>

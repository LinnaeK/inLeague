<template>
  <q-page class="flex flex-center">
        <ConnectionError />
  </q-page>
</template>

<script>
import ConnectionError from '../../src/components/ConnectionError'

export default {
  name: 'ConnectionErrorPage',
  components: {
    ConnectionError
  }
}
</script>

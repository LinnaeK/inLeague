<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 800px">
      <div>We got a Connection Error!</div>
      <div>{{ status }}</div>
      <div>{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ConnectionError',
  computed: {
    ...mapState([
      'status',
      'error'
    ])
  }
}
</script>

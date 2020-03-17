<template>
  <div class="q-pa-md">
    <template>
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 800px">
          <div>We got an {{ status }} error:</div>
          <ul>
            <li class="list" style="list-style: none" v-for="e in error" :key="e">{{ e }}</li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Error',
  computed: {
    ...mapState([
      'error',
      'status'
    ])
  }
}
</script>

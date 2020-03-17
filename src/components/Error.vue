<template>
  <div class="q-pa-md">
    <template>
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 800px">
          <div>We got an {{ status }} error:</div>
          <ul>
            <li class="list" style="list-style: none" v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Error',
  computed: {
    status () {
      return this.$store.state.status
    },
    errors () {
      return this.$store.state.error
    }
  }
}
</script>

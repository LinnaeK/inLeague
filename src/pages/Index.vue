<template>
  <q-page class="flex flex-center">
    <SignInForm />
  </q-page>
</template>

<script>
import SignInForm from '../components/SignInForm'

export default {
  name: 'IndexPage',

  components: {
    SignInForm
  }
}
</script>

<template>
  <b-container>
    <Nav />
    <nuxt />
    <Footer />
  </b-container>
</template>
<script>
import Nav from './partials/nav'
import Footer from './partials/footer'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
body,
html {
  font-family: 'Cairo';
}
</style>

<template>
  <b-container style="font-family: Arial">
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
</style>

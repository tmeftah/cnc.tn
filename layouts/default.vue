<template>
  <b-container style="font-family: Montserrat">
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

<style></style>

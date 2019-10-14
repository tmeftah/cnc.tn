<template>
  <div class="container">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from './partials/nav'
import Footer from './partials/footer'
export default {
  components: {
    Nav, Footer
  }
}
</script>

<style>
</style>

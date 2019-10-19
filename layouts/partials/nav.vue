<template>
  <b-navbar
    :class="scroll"
    toggleable="lg"
    type="light"
    variant="white"
    sticky
    @scroll.native="handleScroll"
  >
    <b-navbar-brand
      to="/"
      exact
    >
      <img
        src="/logo.png"
        alt="Société Energie Tunisie"
      >
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item
          to="/"
          exact
        >
          ENERGIE | more than optimized
        </b-nav-item>
        <b-nav-item
          to="machine"
          exact
        >
          CNC PREMIUM ST
        </b-nav-item>
        <b-nav-item
          to="references"
          exact
        >
          Références | Clients
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  data () {
    return {
      scroll: ''
    }
  },

  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      this.pos = window.scrollY
      if (window.scrollY > 150) {
        this.scroll = 'scroll'
      } else if (window.scrollY < 25) {
        this.scroll = ''
      }
    }
  }
}
</script>
<style  >
.navbar {
  -webkit-transition: height 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out;
  -o-transition: height 0.3s ease-in-out;
  -ms-transition: height 0.3s ease-in-out;
  transition: height 0.3s ease-in-out;
}

.nav-link.nuxt-link-active {
  border-bottom: 2px solid #0f3c6c;
  margin-right: 1em;
}
.nav-link {
  border-bottom: 2px solid #b1b2a933;
  margin-right: 1em;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
@media (min-width: 992px) {
  .navbar.scroll {
    border-bottom: 1px solid #d8d8d8;
    -webkit-transition: height 0.3s ease-in-out;
    -moz-transition: height 0.3s ease-in-out;
    -o-transition: height 0.3s ease-in-out;
    -ms-transition: height 0.3s ease-in-out;
    transition: height 0.3s ease-in-out;

    height: 80px;
  }
}
@media (max-width: 992px) {
  .navbar.scroll {
    border-bottom: 1px solid #d8d8d8;
  }
}
</style>

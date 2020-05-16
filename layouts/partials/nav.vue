<template>
  <b-navbar
    :class="scroll"
    toggleable="lg"
    type="light"
    variant="white"
    sticky
    @scroll.native="handleScroll"
  >
    <b-navbar-brand :to="localePath('/')" @click="hideCollapse">
      <img src="/logo.png" alt="Société Energie Tunisie" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav v-model="show">
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="route in routes"
          :key="route.to"
          :to="localePath('/' + route.to)"
          :exact="route.exact"
          class="text-capitalize"
        >
          {{ $t(route.to) }}
        </b-nav-item>

        <b-nav-item
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          exact
          link-classes="no-border"
          >{{ $t('lang') }}
          <img
            class="pl-2"
            :src="'/' + locale.code + '.svg'"
            alt="flag"
            width="30"
          />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      scroll: '',
      show: false,
      routes: [
        {
          to: 'machine',
          exact: false
        },
        {
          to: 'training',
          exact: false
        },
        {
          to: 'service',
          exact: false
        },
        {
          to: 'contact',
          exact: false
        }
      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },

  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.pos = window.scrollY
      if (window.scrollY > 150) {
        this.scroll = 'scroll'
      } else if (window.scrollY < 25) {
        this.scroll = ''
      }
    },
    hideCollapse() {
      if (this.show) {
        this.show = false
      }
    }
  }
}
</script>
<style>
.navbar {
  -webkit-transition: height 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out;
  -o-transition: height 0.3s ease-in-out;
  -ms-transition: height 0.3s ease-in-out;
  transition: height 0.3s ease-in-out;
}
.nav-item {
}

.nav-link.nuxt-link-active {
  border-bottom: 3px solid #0f3c6c;
}
.nav-link {
  border-bottom: 3px solid #b1b2a933;
  padding: 0.5em 1.3em !important;
  margin: 0em 1em;
}
.no-border {
  border: 0;
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

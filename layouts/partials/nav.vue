<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    sticky
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
<style  >
.navbar {
  border-bottom: 1px solid #d8d8d8;
}
</style>

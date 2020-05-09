<template>
  <footer class="footer py-3 mt-5">
    <b-container>
      <b-row>
        <b-col cols="12" class="pb-3">
          <span class="h4 name">Société Energie Tunisie</span>
        </b-col>
        <b-col>
          <div class="addr">
            <p>
              BP-596
              <br />1km route midoun Sous résidence I3mar (imar)
              <br />Houmt
              Souk, Djerba
              <br />Tunisia
              <br />4180
              <br />
            </p>
          </div>
          <div class="contact">
            Phone: +216 75.627.060 / +216 53.016.888
            <br />Email: info@cnc.tn
          </div>
          <div class="float-right mt-2">
            <p class="copyright">
              Société ENERGIE © {{ new Date().getFullYear() }} | All Rights
              Reserved
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style>
  .name {
    color: #d6d6d6;
    font-weight: 800;
  }
  .addr p,
  .contact,
  .copyright {
    color: #d6d6d6;
    line-height: 1.2em;
  }
  .footer {
    background-color: #0f3c6c;
  }
</style>

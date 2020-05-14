<template>
  <div class="container mt-5">
    <b-row>
      <b-col>
        <div class="d-flex">
          <h1 class="display-4 text-uppercase">CNC PREMIUM PRO</h1>
          <b-img
            class="pl-3 mt-2"
            :src="'/flag-tn.jpg'"
            alt="Image 1"
            height="50"
          />
        </div>
        <p class="h4">{{ $t('fabrication_100') }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-carousel
          id="
          carousel-1"
          class="test"
          :interval="6000"
          img-width="800"
          img-height="480"
          controls
          indicators
        >
          <!-- Text slides with image -->
          <b-carousel-slide img-src="/cncpremium-ST--1024x568.WebP" />
          <b-carousel-slide img-src="/cncpremium-ST--1024x568.WebP" />
        </b-carousel>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <p class="bordertop" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="mb-4">
        <p class="h2">CNC PREMIUM ST en vidéos</p>
        <p class="h4">
          Consulter les vidéos mises sur notre site ou regarder les toutes sur
          notre chaîne youtube
        </p>
      </b-col>
      <b-col cols="12" sm="3">
        <img
          width="100%"
          src="https://img.youtube.com/vi/Kps3tn_g2KA/maxresdefault.jpg"
          alt="video-youtube-cnc-malek-meftah"
        />
      </b-col>

      <b-col cols="12" sm="3">
        <img
          width="100%"
          src="https://img.youtube.com/vi/lGPZTKcCoEA/maxresdefault.jpg"
          alt="video-youtube-cnc-malek-meftah"
        />
      </b-col>
      <b-col cols="12" sm="3">
        <img
          width="100%"
          src="https://img.youtube.com/vi/6lMv8f-PvFA/maxresdefault.jpg"
          alt="video-youtube-cnc-malek-meftah"
        />
      </b-col>
      <b-col cols="12" sm="3">
        <img
          width="100%"
          src="https://img.youtube.com/vi/Srk1U5s_CFA/maxresdefault.jpg"
          alt="video-youtube-cnc-malek-meftah"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bordertop {
  border-top: 1px solid #d8d8d8;
  -webkit-box-shadow: 0px 0px 54px -24px #000000bf;
  -moz-box-shadow: 0px 0px 54px -24px #000000bf;
  box-shadow: 0px 0px 54px -24px #000000bf;
  padding-top: 2em;
}
.carousel-indicators li {
  background-color: #2d4764;
}
.carousel-indicators .active {
  background-color: #0f3c6c;
}
</style>

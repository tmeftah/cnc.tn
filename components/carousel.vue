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
          <b-carousel-slide img-src="/cncpremium-ST--1024x568.png" />
          <b-carousel-slide img-src="/cncpremium_pro_3d.png" />
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
        <video width="100%" controls poster="/v1.jpg">
          <source src="/v1.webm" type="video/webm;" />
        </video>
      </b-col>

      <b-col cols="12" sm="3">
        <video width="100%" controls poster="/v2.jpg">
          <source src="/v2.webm" type="video/webm;" />
        </video>
      </b-col>
      <b-col cols="12" sm="3">
        <video width="100%" controls poster="/v3.jpg">
          <source src="/v3.webm" type="video/webm;" />
        </video>
      </b-col>
      <b-col cols="12" sm="3">
        <video width="100%" controls poster="/v4.jpg">
          <source src="/v4.webm" type="video/webm;" />
        </video>
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

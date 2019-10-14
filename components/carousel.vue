<template>
  <div>
    <b-row class="mt-5">
      <b-col>
        <div class="d-flex">
          <h1 class="display-4 text-uppercase">
            CNC PREMIUM PRO
          </h1>
          <b-img
            class="pl-3 mt-2"
            :src="'/flag-tn.jpg'"
            alt="Image 1"
            height="50"
          />
        </div>
        <p class="h4">
          Fabrication 100% Tunisienne
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-carousel
          id="
          carousel-1"
          :interval="6000"
          img-height="480"
          controls
          indicators
          background="white"
          style="text-shadow: 1px 1px 2px #333;"
          class="car"
        >
          <!-- Text slides with image -->
          <b-carousel-slide img-src="/cncpremium-ST--1024x568.png" />
          <b-carousel-slide img-src="/CNC-PREMIU-PRO-BIG-Medium.jpg" />
        </b-carousel>
      </b-col>
    </b-row>
    <b-row class="bordertop" />
    <b-row>
      <b-col
        cols="12"
        class="mb-4"
      >
        <p class="h2">
          CNC PREMIUM ST en vidéos
        </p>
        <p class="h4">
          Consulter les vidéos mises sur notre site ou regarder les toutes sur notre chaîne youtube
        </p>
      </b-col>
      <b-col
        cols="12"
        sm="3"
      >
        <div class="embed-responsive embed-responsive-16by9 mb-2">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/Kps3tn_g2KA"
            allowfullscreen
          />
        </div>
      </b-col>

      <b-col
        cols="12"
        sm="3"
      >
        <div class="embed-responsive embed-responsive-16by9 mb-2">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/lGPZTKcCoEA"
            allowfullscreen
          />
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="3"
      >
        <div class="embed-responsive embed-responsive-16by9 mb-2">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/6lMv8f-PvFA"
            allowfullscreen
          />
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="3"
      >
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/58nY_BRYTnE"
            allowfullscreen
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style >
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

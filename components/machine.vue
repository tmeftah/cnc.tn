<template>
  <div class="container mt-5">
    <b-row>
      <b-col cols="12" lg="7">
        <b-row>
          <b-col cols="8">
            <h5>
              La première CNC ROUTER fabriquée en Tunisie
            </h5>
          </b-col>
          <b-col cols="12" class="mt-5">
            <b-img-lazy fluid src="/cncpremium-ST--618x342.WebP" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" lg="5">
        <h1
          class="d-flex justify-content-start "
          style="font-weight:1000;color:#0b3b6c;"
        >
          CNC PREMIUM ST
          <b-img
            class="ml-2"
            :src="'/flag-tn.jpg'"
            alt="Image 1"
            height="30"
            style="margin-top:-0.5rem;"
          />
        </h1>

        <h3
          class="d-flex justify-content-center"
          style="font-weight:700;color:#0b3b6c;"
        >
          Extensible & Polyvalente
        </h3>

        <p class="mt-3" style="font-weight:300">
          <br />Cette <strong>CNC ROUTER</strong> est dédiée aux professionnels
          voulant associer
          <strong>la polyvalence</strong>
          à la
          <strong>robustesse</strong> avec possibilité d’options
          <strong>personnalisées</strong>
        </p>

        <div class="row row-cols-2 mt-1">
          <div class="col px-0  py-2" style="border-bottom:2px #ebebeb solid">
            <div
              class="col d-inline-flex px-0  py-2"
              style=" border-right:2px #ebebeb solid"
            >
              <span
                class="material-icons mr-2"
                style="font-size: 2.5rem; color:#515b66; "
              >
                filter_tilt_shift
              </span>
              <div class="column ml-3">
                <h5 class="mb-0">25 MM</h5>
                <p style="font-size:14px">German ball screws</p>
              </div>
            </div>
          </div>

          <div class="col px-0 py-2 " style="border-bottom:2px #ebebeb solid">
            <div class=" col d-inline-flex  py-2">
              <span
                class="material-icons mr-2"
                style="font-size: 2.5rem; color:#515b66; "
              >
                rotate_right
              </span>
              <div class="column ml-3">
                <h5 class="mb-1">23.500 RPM</h5>
                <p style="font-size:14px">Synchrone Spendel</p>
              </div>
            </div>
          </div>
          <div class="col px-0 mt-4">
            <div
              class="col d-inline-flex px-0 py-2"
              style=" border-right:2px #ebebeb solid"
            >
              <span
                class="material-icons mr-2"
                style="font-size: 2.2rem; color:#515b66; "
              >
                tab_unselected
              </span>
              <div class="column ml-3">
                <h5 class="mb-0">3M X 2.2M</h5>
                <p style="font-size:14px">
                  Work table
                </p>
              </div>
            </div>
          </div>
          <div class="col px-0 mt-4">
            <div class=" col d-inline-flex py-2">
              <span
                class="material-icons mr-2"
                style="font-size: 2.5rem; color:#515b66; "
              >
                settings_input_hdmi
              </span>
              <div class="column ml-3">
                <h5 class="mb-0">EtherCAT</h5>
                <p style="font-size:14px">
                  Motion controller
                </p>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col cols="12" class="pl-0">
        <b-button
          class="btn-download"
          squared
          variant="light"
          size="lg"
          href="/Brochure_CNC_PREM_STsmall.pdf"
          target="_blank"
        >
          <span class="btn-text h6">Télécharger la brochure</span>
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col class="d-flex justify-content-end align-items-center pr-0">
        <b-button
          class="mr-2 d-flex align-items-center"
          @click="openAll"
          variant="outline-secondary"
        >
          <b-icon icon="arrow-down"></b-icon>Open all</b-button
        >
        <b-button
          class="d-flex align-items-center"
          @click="closeAll"
          variant="outline-secondary"
        >
          <b-icon icon="arrow-up"></b-icon>Close all</b-button
        >
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col class="px-0">
        <b-card
          v-for="(collapse, index) in collapses"
          :key="index"
          no-body
          class="mb-1"
          header-class=" text-dark bg-dark"
        >
          <b-card-header
            header-tag="header"
            role="tab"
            @click="collapse.show = !collapse.show"
          >
            <div class="d-flex">
              <b-img
                block
                :src="collapse.icon"
                max-width="100%"
                height="40"
                class="pr-4 d-flex"
              />
              <h3 class="d-flex">{{ collapse.header_text }}</h3>
            </div>
          </b-card-header>
          <b-collapse v-model="collapse.show" id="accordion-1" role="tabpanel">
            <b-card-body class="text-dark bg-white pt-3">
              <b-list-group flush>
                <b-list-group-item
                  v-for="(item, index) in collapse.table"
                  :key="index"
                  button
                >
                  <b-row cols="1" cols-sm="2">
                    <b-col class="d-flex">
                      {{ item.col_left }}
                    </b-col>
                    <b-col class="d-flex">
                      {{ item.col_right }}
                    </b-col>
                  </b-row>
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>

    <div class="mt-5" />

    <!-- <b-row cols="2" cols-sm="3" cols-lg="6">
      <b-col class="mb-4 mb-lg-0">
        <b-card
          img-src="/material/mdf.jpg"
          style="max-width: 20rem;"
          img-alt="mdf"
          img-top
        >
          <b-card-text>mdf</b-card-text>
        </b-card>
      </b-col>
      <b-col class="mb-4 mb-lg-0">
        <b-card
          img-src="/material/hetre.jpg"
          style="max-width: 20rem;"
          img-alt="hetre"
          img-top
        >
          <b-card-text>hetre</b-card-text>
        </b-card>
      </b-col>
      <b-col class="mb-4 mb-lg-0">
        <b-card
          img-src="/material/pvc.jpg"
          style="max-width: 20rem;"
          img-alt="pvc"
          img-top
        >
          <b-card-text>pvc/forex</b-card-text>
        </b-card>
      </b-col>

      <b-col>
        <b-card
          img-src="/material/plexiglass.jpg"
          style="max-width: 20rem;"
          img-alt="plexiglass"
          img-top
        >
          <b-card-text>plexiglass</b-card-text>
        </b-card>
      </b-col>

      <b-col>
        <b-card
          img-src="/material/alu.jpg"
          style="max-width: 20rem;"
          img-alt="alu"
          img-top
        >
          <b-card-text>alu</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          img-src="/material/acier_doux.jpg"
          style="max-width: 20rem;"
          img-alt="acier_doux"
          img-top
        >
          <b-card-text>acier doux</b-card-text>
        </b-card>
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'ghgdhnmölm#ü',
      collapses: [
        {
          header_text: 'Transmission',
          text: ``,
          icon: '/icons/vis_a_bille.png',
          table: [
            {
              col_left: `Mouvement de l'axe X`,
              col_right: '2 vis à billes de diamètre 25 mm'
            },
            {
              col_left: `Mouvement de l'axe Y`,
              col_right: `1 vis à billes de diamètre 25 mm`
            },
            {
              col_left: `Mouvement de l'axe Z`,
              col_right: `1 vis à billes de diamètre 16 mm`
            }
          ],
          show: true
        },
        {
          header_text: 'Électrobroches',
          text: ``,
          icon: '/icons/broche.gif',
          table: [
            {
              col_left: `Broche synchrone Allemande`,
              col_right: '1.8 kw, 23 500 tr/min'
            },
            {
              col_left: `Broche asynchrone Italienne à haute fréquence`,
              col_right: `9kw, 24 000 rpm (option de roulements en céramique)`
            },
            {
              col_left: `Broche asynchrone Italienne à haute fréquence`,
              col_right: `9kw, 24 000 rpm (option de roulements en céramique + changeur d’outils)`
            }
          ],
          show: false
        },
        {
          header_text: 'Table de travail/coupe',
          text: ``,
          icon: '/icons/table_coupe.png',
          table: [
            {
              col_left: `Dimensions de table (standard) `,
              col_right: '3000 X 2200 mm'
            },
            {
              col_left: `Dimensions de coupe (standard) `,
              col_right: `2500 X 1850 X 150 mm`
            },
            {
              col_left: `Des dimensions personnalisées sont possibles `,
              col_right: ``
            }
          ],
          show: false
        },
        {
          header_text: 'Armoire',
          text: ``,
          icon: '/icons/boitier.png',
          table: [
            {
              col_left: `Alimentation`,
              col_right: '76VDC-1000W'
            },
            {
              col_left: `Armoire`,
              col_right: `Vitrée IP55 avec ventilation forcée`
            },
            {
              col_left: `Directeur d’axes`,
              col_right: `supportant 4 axes (standard) `
            },
            {
              col_left: `Protection`,
              col_right: `fusibles à l’entrée et à la sortie de tous les composants électriques`
            }
          ],
          show: false
        }
      ]
    }
  },
  methods: {
    openAll() {
      this.collapses.forEach(collapse => {
        collapse.show = true
      })
    },
    closeAll() {
      this.collapses.forEach(collapse => {
        collapse.show = false
      })
    }
  }
}
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
.text-gray {
  color: #727272;
}
.btn-download {
  background: #375d85;
  padding-top: 0.2rem;
  color: #fff;
}
.card-body {
  background-color: #535352;
  color: #fff;
  text-align: center;
}
.table th {
  background-color: #d9edf7;
  color: #0f3c6c;
}

@media (max-device-width: 576px) {
  h1 {
    font-size: 34px;
  }
  h3 {
    font-size: 23px;
  }
}
</style>

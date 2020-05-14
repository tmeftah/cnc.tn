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
          <div class="col px-0 mt-2" style="border-bottom:2px #ebebeb solid">
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

          <div class="col px-0 mt-2" style="border-bottom:2px #ebebeb solid">
            <div class=" col d-inline-flex py-2">
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
          <div class="col px-0 mt-2">
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
          <div class="col px-0 mt-2">
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
      <b-col cols="12">
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
    <div class="my-5" />
    <!-- 1st Col -->
    <b-row style="margin-top:100px;">
      <b-col cols="12" lg="6">
        <b-row>
          <b-col class="d-flex">
            <b-img-lazy
              src="/icons/vis_a_bille.png"
              max-width="100%"
              height="85"
              class="pr-4"
            />
            <div class="text-justify">
              <h3>
                <strong>Transmission par vis à billes</strong>
              </h3>
              <p v-html="$t('transmission_text')"></p>
            </div>
          </b-col>
        </b-row>
        <!--  -->
        <b-row class="mt-4">
          <b-col class="d-flex">
            <b-img-lazy
              src="/icons/table_coupe.png"
              max-width="100%"
              height="85"
              class="pr-4"
            />
            <div class="text-justify">
              <h3>
                <strong>Table de travail/coupe</strong>
              </h3>
              Dimensions de table (standard) :
              <strong>3000 X 2200 mm</strong>
              <br />Dimensions de coupe (standard) :
              <strong>2500 X 1850 X 150 mm</strong>
              <br />Des dimensions personnalisées sont possibles
            </div>
          </b-col>
        </b-row>
        <!--  -->
        <b-row class="mt-4">
          <b-col class="d-flex">
            <b-img-lazy
              src="/icons/boitier.png"
              max-width="100%"
              height="85"
              class="pr-4"
            />
            <div class="text-justify">
              <h3>
                <strong>Armoire</strong>
              </h3>
              Alimentation industrielle robuste <strong>76VDC-1000W</strong>.
              <br />Armoire <strong>Vitrée IP55</strong> avec
              <strong>ventilation forcée</strong> , Directeur d’axes
              <strong>Allemand</strong> supportant
              <strong>4 axes</strong> (standard) avec commande de vitesse de la
              broche ,commande aspirateur et un watch dog pour la sécurité.
              Protection maximale par des fusibles à l’entrée et à la sortie de
              tous les composants électriques.
            </div>
          </b-col>
        </b-row>
      </b-col>
      <!-- 2d col -->
      <b-col cols="12" lg="6" class="mt-4 mt-lg-0 pl-lg-5">
        <b-row>
          <b-col class="d-flex">
            <b-img-lazy
              src="/icons/broche.gif"
              max-width="100%"
              height="85"
              class="pr-4"
            />
            <div class="text-justify">
              <h3 class="text-break">
                <strong>Électrobroches</strong>
              </h3>
              <p>
                <strong>Broche synchrone Allemande</strong> Broche synchrone
                Allemande (1.8 kw ,23 500 tr/min) avec l’option d’ajout d’un
                changeur d’outils pneumatique en kit (pince ER11) qui se monte
                directement sur la broche pour une cadence de travail modérée.
                <br />
                <strong>Broche asynchrone Italienne à haute fréquence</strong>
                jusqu’à la puissance de 9kw (24 000 rpm) avec l’option de
                <strong>roulements en céramique</strong> pour une forte cadence
                de travail.
                <br />
                <strong
                  >Broche asynchrone Italienne à haute fréquence avec changeur
                  d’outils</strong
                >
                : conseillée pour une cadence de travail industriel en série.
              </p>
            </div>
          </b-col>
        </b-row>
        <!--  -->
        <b-row class="mt-4">
          <b-col class="d-flex">
            <b-img-lazy
              src="/icons/fixation.png"
              max-width="100%"
              height="85"
              class="pr-4"
            />
            <div class="text-break">
              <h3>
                <strong>Fixation sur table</strong>
              </h3>
              T-slot (standard) Table aspirante. Vaccum pads.
            </div>
          </b-col>
        </b-row>
        <!--  -->
        <b-row class="mt-4">
          <b-col class="d-flex">
            <b-img-lazy
              src="/icons/logiciel.png"
              max-width="100%"
              height="85"
              class="pr-4"
            />
            <div class="text-break">
              <h3>
                <strong>Logiciel</strong>
              </h3>
              <strong>Mach3 version française</strong> (sans licence*)
              <br />
              <b-link
                href="http://www.mach3fr.com"
                target="blank"
                class="text-muted"
                >www.mach3fr.com</b-link
              >
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="mt-5" />

    <b-row cols="2" cols-sm="3" cols-lg="6">
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
    </b-row>

    <div class="mt-5" />
    <h3>Tableau des caractéristiques CNC PREMIUM ST</h3>
    <b-row class="mt-4">
      <b-col>
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Table de coupe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dimension de table</td>
                  <td>3000 x 2100mm</td>
                </tr>
                <tr>
                  <td>Dimension de coupe</td>
                  <td>2500 x 1850 x 150mm</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <!-- table -2 -->
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Broche d’origine Italienne</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vitesse de rotation</td>
                  <td>24000 tr/min</td>
                </tr>
                <tr>
                  <td>Variateur de vitesse</td>
                  <td>électronique commandé par logiciel</td>
                </tr>
                <tr>
                  <td>Puissance</td>
                  <td>3.3 KW / 4.4 HP</td>
                </tr>
                <tr>
                  <td>Système de refroidissement</td>
                  <td>Air</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <!-- table 3 -->
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Guidage et transmission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transmission</td>
                  <td>
                    2 Vis à bille ∅25mm sur l'axe X 1 Vis à bille ∅25mm sur
                    l'axe Y 1 Vis à bille ∅16mm sur l'axe z
                  </td>
                </tr>
                <tr>
                  <td>Guidage</td>
                  <td>Chariot à deux rangées de bille.</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <!-- table 4 -->
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Commande et drive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Directeur d’axes</td>
                  <td>
                    Allemand supportant 4 axes ,commandant la vitesse de la
                    broche, l'aspirateur et le watch dog (pour la sécurité).
                  </td>
                </tr>
                <tr>
                  <td>Drive</td>
                  <td>
                    3 drives de grande puissance (80VDC-8A) avec système de
                    sécurité intégré (sur et sous-tension, sur-intensité)
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-col>
      <!-- 2 col right -->
      <b-col>
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Système de bridge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>T-slot</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <!-- table 2 -->
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Alimentation secteur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Voltage</td>
                  <td>380V triphasé ou 220V monophasé</td>
                </tr>
                <tr>
                  <td>Amperage</td>
                  <td>max 16A-380V/ 25A-220V</td>
                </tr>
                <tr>
                  <td>fréquence</td>
                  <td>50-60Hz</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <!-- table 3 -->
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Données générales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Châssis de la machine</td>
                  <td>Aluminium traité et anodisé.</td>
                </tr>
                <tr>
                  <td>Poids</td>
                  <td>Environ 500Kg</td>
                </tr>
                <tr>
                  <td>Dimensions generales</td>
                  <td>3200x2450x1000mm</td>
                </tr>
                <tr>
                  <td>Garantie</td>
                  <td>1 an (cf. conditions pour chaque modèle)</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <!-- table 4 -->
        <b-row>
          <b-col>
            <table class="table table-hover table-sm">
              <thead>
                <tr>
                  <th colspan="2">Extensions</th>
                </tr>
              </thead>
              <tbody>
                <tr colspan="2">
                  <td>Quatrième axe</td>
                </tr>
                <tr colspan="2">
                  <td>Changeur d'outils</td>
                </tr>
                <tr colspan="2">
                  <td>Table a vide</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
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
</style>

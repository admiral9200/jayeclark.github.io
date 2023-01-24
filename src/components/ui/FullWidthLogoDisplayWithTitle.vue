<script lang="js">
export default {
  props: ['title', 'logos'],
  computed: {
    numberOfLogos() {
      return this.logos.length
    },
    logosPartitioned() {
      const logosWithImageUrls = this.logos.map((logo) => {
        const fileName = logo.fileName;
        const url = new URL(`../../assets/${fileName}`, import.meta.url).href
        return { fileName, alt: logo.alt, url }
      })
      const halfwayPoint = this.numberOfLogos % 2 === 0 ? this.numberOfLogos / 2 : (this.numberOfLogos + 1) / 2;
      return [logosWithImageUrls.slice(0, halfwayPoint), logosWithImageUrls.slice(halfwayPoint)];
    }
  },
};
</script>

<template>
  <div class="logos">
    <hr />
    <span class="centered">
      <h6>{{ title }}</h6>
    </span>

    <div class="imageline">
      <div
        v-for="(logos, index) in logosPartitioned"
        :key="index"
        class="logo-container"
        :style="
          'width: ' +
          (500 * logos.length) / numberOfLogos +
          'px;flex-shrink: ' +
          logos.length +
          '; flex-grow: ' +
          logos.length +
          ';'
        "
      >
        <div v-for="(logo, logoIndex) in logos" :key="logoIndex" class="logo">
          <img
            :src="logo.url"
            :alt="logo.alt"
            ref="logo"
            style="max-width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
hr {
  width: 30%;
  border-bottom: 1px solid #ccc;
  margin: 40px auto 20px auto !important;
}
.logo-container {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  flex-shrink: 1;
  padding: 10px 0px;
  flex-grow: 1;
  max-width: 550px;
}
.imageline {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 180px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 5px;
}

@media only screen and (max-width: 576px) {
  hr {
    width: 30%;
    border-bottom: 1px solid #ccc;
    margin: 40px auto 20px auto !important;
  }
  .logo-container {
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    flex-shrink: 1;
    padding: 10px 0px;
    flex-grow: 1;
    max-width: 550px;
  }
  .imageline {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 180px;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 5px;
  }
}
</style>

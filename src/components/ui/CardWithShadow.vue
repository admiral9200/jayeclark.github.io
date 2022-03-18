<script lang="js">
export default {
  name: "CardWithShadow",
  props: ['title', 'paragraphs', 'buttons', 'imageUrl', 'textLeft', 'offsetUp', 'offsetDown' ],
  computed: {
    imageClass() {
      if (this.offsetUp) {
        return "offset-up";
      }
    return this.offsetDown ? "offset-down" : null;
    }
  },
  mounted() {
    const images = Array.from(document.getElementsByClassName("cardWithShadow-img"));
    images.forEach((image) => {
      const currentSrc = image.getAttribute("src");
      const newSrc = new URL(`../../assets/${currentSrc}`, import.meta.url);
      image.src = newSrc;
    })
  }
};
</script>

<template>
  <div class="bio card-grey">
    <div
      class="card-white"
      :class="textLeft ? `order-reversed` : `order-normal`"
    >
      <div class="card-image-top" :class="imageClass">
        <img
          class="cardWithShadow-img expanding-image"
          :src="imageUrl"
          style="max-width: 100%"
        />
      </div>
      <div class="card-content offset-large">
        <h2>{{ title }}</h2>
        <div
          v-for="(paragraph, index) in paragraphs"
          v-bind:key="index"
          :innerHTML="paragraph"
          style="margin-top: 20px; margin-bottom: 20px"
        ></div>
        <a
          v-for="(button, index) in buttons"
          :key="index"
          :href="button.url"
          :class="button.classList"
          >{{ button.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.order-reversed {
  flex-direction: row-reverse;
}
.order-normal {
  flex-direction: row;
}
.offset-up {
  margin-top: -60px;
  align-items: flex-start;
  align-self: flex-start;
}

.offset-down {
  margin-bottom: -60px;
  align-items: flex-end;
}
</style>

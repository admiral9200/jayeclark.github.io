<script setup lang="ts">
import { computed } from "vue";

interface Button {
  text: string;
  url: string;
  classList: string;
}
interface Props {
  title: string;
  subtitle?: string;
  paragraphs: Array<string>;
  buttons: Array<Button>;
  imageUrl: string;
  textLeft: boolean;
  offsetUp?: boolean;
  offsetDown?: boolean;
}

// eslint-disable-next-line vue/no-setup-props-destructure
const {
  title,
  paragraphs,
  buttons,
  imageUrl,
  textLeft,
  offsetUp = false,
  offsetDown = false,
} = defineProps<Props>();

const imageClass = computed(() => {
  if (offsetUp) {
    return "offset-up";
  }
  return offsetDown ? "offset-down" : null;
});
</script>

<template>
  <div class="bio card-grey">
    <div
      class="card-white"
      :class="textLeft ? `order-reversed` : `order-normal`"
    >
      <div class="card-image-top" :class="imageClass">
        <img
          :src="`../src/assets${imageUrl}`"
          style="max-width: 100%"
          class="expanding-image"
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
}

.offset-down {
  margin-bottom: -60px;
  align-items: flex-end;
}
</style>

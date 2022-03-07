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
  subtitle,
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
  return offsetDown ? "offset-down" : "centered";
});
</script>

<template>
  <div :class="textLeft ? `order-reversed` : `order-normal`">
    <div :class="imageClass" style="flex-basis: 45%">
      <img
        :src="`@/assets/${imageUrl}`"
        style="max-width: 100%"
        class="expanding-image"
      />
    </div>
    <div style="flex-basis: 65%">
      <h6>{{ title }}</h6>
      <h3>{{ subtitle }}</h3>
      <div
        v-for="(par, index) in paragraphs"
        :key="index"
        :innerHTML="par"
        style="margin-top: 20px; margin-bottom: 20px"
      ></div>
      <a
        v-for="(button, index) in buttons"
        :key="index"
        :href="button.url"
        :class="button.classList"
        target="_blank"
        >{{ button.text }}</a
      >
    </div>
  </div>
</template>

<style>
.order-reversed {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.order-normal {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.offset-up {
  margin-top: -60p;
  padding: 0px 20px;
  align-items: flex-start;
}

.offset-down {
  margin-bottom: -60px;
  padding: 0px 20px;
  align-items: flex-end;
}
.centered {
  padding: 0px 20px;
  align-items: center;
}
</style>

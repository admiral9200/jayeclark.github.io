<script lang="js">
export default {
  name: 'ImageLockup',
  props: ['ribbonHeight', 'adjustedWidth', 'imgHeight', 'tech', 'refToSet', 'image'],
  data() {
    return {
      ratings: [0, 1, 2, 3],
      titles: [
        "I've used this in an assignment or contributed to an OSS project using this, but am still a novice.",
        "I've used this in one of my own projects or extensively in an OSS one, and am actively learning more.",
        "I have used this extensively and have successfully debugged and/or done troubleshooting with more complex situations.",
        "I am proficient in this relative to my overall career experience. I can hit the ground running in this language or environment.",
      ]
    }
  },
  mounted() {
    const el = this.$refs[`${this.refToSet}`];
    if (el.classList.contains('unprocessed')) {
      const imgUrl = new URL(`../../../assets/${this.image}`, import.meta.url);
      el.src = imgUrl;
      el.classList.remove('unprocessed');
    }
  },
  updated() {
    const el = this.$refs[`${this.refToSet}`];
    const imgUrl = new URL(`../../../assets/${this.image}`, import.meta.url);
    el.src = imgUrl;
  }
}
</script>

<template>
  <div
    :style="{
      height: `${ribbonHeight}px`,
      width: `${adjustedWidth}px`,
      padding: '0px 10px',
    }"
  >
    <div
      class="image-div"
      :style="{
        height: `${imgHeight}px`,
        minHeight: `${imgHeight}px`,
        maxHeight: `${imgHeight}`,
      }"
    >
      <div class="image-alt-name" :style="{ display: tech.url ? 'none' : '' }">
        {{ tech.name }}
      </div>
      <img
        class="unprocessed"
        src="@/assets/blank.png"
        :alt="tech.name"
        :ref="refToSet"
        :height="tech.dimension && tech.dimension === 'height' ? '100' : ''"
        :width="!tech.dimension || tech.dimension === 'width' ? '100' : ''"
        :style="{ display: tech.url ? '' : 'none' }"
        :id="tech.url"
      />
    </div>
    <div
      class="ratings-div"
      style="display: flex; flex-wrap: nowrap; justify-content: center"
      :title="titles[tech.competence - 1]"
    >
      <template v-for="(rating, idx) in ratings" :key="idx">
        <div
          :style="{
            margin: `${25 - rating * 5}px 2px 5px 2px`,
            border: `1px solid #666`,
            width: `10px`,
            height: `${10 + rating * 5}px`,
            backgroundColor: tech.competence >= rating + 1 ? 'green' : '#ccc',
          }"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
const categories = ref([
  {
    title: "Back End",
    description:
      "I work primarily in Node.js on the back end, though I've also done some work in Ruby on Rails, Flask, and LAMP.",
    samples: [
      { name: "Instaplate", img: "/images/instaplate-pic.png" },
      { name: "WhatsApp", img: "/images/whats-app.png" },
      { name: "Holy Grail", img: "/images/holy-grail.png" },
    ],
  },
  {
    title: "Open Source",
    description:
      "I've contributed code to more than <b>70 open source software projects</b> including TypeScript, O3DE, React Bootstrap, Material UI, Chatwoot, and MetaMask.",
    samples: [
      { name: "RailsDev", img: "/images/railsdev-thumbnail.png" },
      { name: "Interactivenn", img: "/images/interactivenn-thumbnail.png" },
      { name: "RottingResearch", img: "/images/rottingresearch-thumbnail.png" },
    ],
  },
  {
    title: "Front End",
    description:
      "I work primarily in React, Vue, and vanilla JS on the front end, I've also done some work with Angular, and advanced customization in Wordpress and Wix.",
    samples: [
      { name: "Bad Bank", img: "/images/badbank.png" },
      { name: "Clones", img: "/images/clones.png" },
      { name: "Ms Pacman", img: "/images/pacman.png" },
    ],
  },
]);
</script>

<template>
  <div class="projects-overview card-grey" style="margin-bottom: 80px">
    <div class="card-white">
      <div style="width: 100%; display: flex; align-items: flex-end">
        <div class="offset-small card-content">
          <div style="display: block; justify-content: center">
            <div class="card-image-top-left" style="max-width: 350px">
              <img
                src="@/assets/images/projects.png"
                style="float: none"
                width="100%"
                id="projects-img-1"
              />
            </div>
          </div>
        </div>
        <div
          class="offset-none card-content"
          style="padding-left: 0px; margin-bottom: 40px; align-items: bottom"
        >
          <div style="margin-top: auto"><h1>Projects</h1></div>
        </div>
      </div>

      <template v-for="(category, index) in categories" v-bind:key="index">
        <hr :class="index === 0 ? `hidden` : `visible`" />
        <div style="width: 100%; max-width: 700px">
          <div style="width: 100%">
            <h3>{{ category.title }}</h3>
            <p
              class="project-description"
              :innerHTML="category.description"
            ></p>
          </div>
          <div style="width: 100%">
            <div class="project-links">
              <template
                v-for="(sample, linkindex) in category.samples"
                :key="linkindex"
              >
                <RouterLink
                  :to="`/projects#${sample.name
                    .toLowerCase()
                    .replace(` `, ``)}`"
                >
                  <img
                    :title="sample.name"
                    :alt="sample.name.toLowerCase().replace(` `, ``)"
                    class="project-thumbnail"
                    :src="`../src/assets${sample.img}`"
                    style="max-height: 100%"
                  />
                </RouterLink>
              </template>
              <RouterLink
                :to="`/projects#${category.title
                  .toLowerCase()
                  .replace(` `, ``)}`"
              >
                <div class="btn btn-primary" style="width: 100%">
                  View Projects
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style>
.hidden {
  display: none;
}
.project-category {
  display: flex;
  flex-wrap: nowrap;
}
.project-category-description {
  flex-basis: 45%;
  margin: 0px 10px;
}
.project-links-container {
  flex-basis: 65%;
  margin: 0px 10px;
}
.project-thumbnail {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin: 7px 5px;
  height: 70px;
  transition: margin 1s ease, height 1s ease;
}
.project-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.projects-cta {
  width: 100%;
}
</style>

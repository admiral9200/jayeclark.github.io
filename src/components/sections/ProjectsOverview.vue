<script lang="js">
import { RouterLink } from "vue-router";
export default {
  RouterLink,
  data() {
    return {
      categories: [
        {
          title: "Back End",
          description:
            "I work primarily in Node.js on the back end, though I've also done some work in Ruby on Rails, Flask, and LAMP.",
          samples: [
            { name: "Instaplate", img: "instaplate-pic.png" },
            { name: "WhatsApp", img: "whats-app.png" },
            { name: "Holy Grail", img: "holygrail-thumbnail.png" },
          ],
        },
        {
          title: "Open Source Software",
          description:
            "I've contributed code to more than <b>70 open source software projects</b> including TypeScript, O3DE, React Bootstrap, Material UI, Chatwoot, and MetaMask.",
          samples: [
            { name: "RailsDev", img: "railsdev-thumbnail.png" },
            { name: "Interactivenn", img: "interactivenn-thumbnail.png" },
            { name: "RottingResearch", img: "rottingresearch-thumbnail.png" },
          ],
        },
        {
          title: "Front End",
          description:
            "I work primarily in React, Vue, and vanilla JS on the front end, I've also done some work with Angular, and advanced customization in Wordpress and Wix.",
          samples: [
            { name: "Bad Bank", img: "badbank.png" },
            { name: "Clones", img: "clones.png" },
            { name: "Ms Pacman", img: "pacman.png" },
          ],
        },
      ],
      imageRefs: new Array(0),
    };
  },
  mounted() {
    const parents = this.categories;
    for (let i = 0; i < parents.length; i++) {
      const children = this.categories[i].samples;
        for (let j = 0; j < children.length; j++) {
          const el = this.$refs[`ref-${i}-${j}`][0];
          const currentSrc = el.getAttribute("src");
          if (!/\//.test(currentSrc)) {
            const newSrc = new URL(`../../assets/${currentSrc}`, import.meta.url);
            el.src = newSrc;
          }
        };
    }
  },
};
</script>

<template>
  <div class="projects-overview card-grey" style="margin-bottom: 80px">
    <div class="card-white">
      <div style="width: 100%; display: flex; align-items: flex-end">
        <div class="offset-small card-content">
          <div style="display: block; justify-content: center">
            <div class="card-image-top-left" style="max-width: 350px">
              <img
                src="@/assets/projects.png"
                style="max-width: 100%"
                class="expanding-image"
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
            <p :innerHTML="category.description"></p>
          </div>
          <div style="width: 100%">
            <div class="project-links">
              <template
                v-for="(sample, linkindex) in category.samples"
                :key="linkindex"
              >
                <RouterLink
                  :to="{
                    name: `projects`,
                    params: {
                      section: category.title.toLowerCase().replace(/\s/g, ``),
                    },
                  }"
                >
                  <img
                    :ref="`ref-${index}-${linkindex}`"
                    :title="sample.name"
                    :alt="sample.name.toLowerCase().replace(/\s/g, ``)"
                    class="project-thumbnail"
                    :src="sample.img"
                    style="max-height: 100%"
                  />
                </RouterLink>
              </template>
              <RouterLink
                :to="{
                  name: `projects`,
                  params: {
                    section: category.title.toLowerCase().replace(/\s/g, ``),
                  },
                }"
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

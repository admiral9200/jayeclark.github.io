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
            "I work primarily in Java on the back end. Most of my experience is with proprietary projects for work, and can't be highlighted here, but I'm working on updating this section" +
            " with some sample projects that better reflect my back end skill level. <br><br>More recently, I've added Node.js to my back end skill set, and have also done some work in Ruby on Rails, Flask, and LAMP.",
          samples: [
            { name: "My Dev Interview", img: "mydevinterview-thumbnail.png" },
            { name: "Instaplate", img: "instaplate-thumbnail.png" },
            { name: "Tiny Tech Trivia", img: "t3-thumb.png" },
          ],
        },
        {
          title: "Open Source Software",
          description:
            "I've contributed code to more than <b>80 open source software projects</b> including TypeScript, O3DE, React Bootstrap, Material UI, Chatwoot, and MetaMask.",
          samples: [
            { name: "RailsDevs", img: "railsdevs-thumbnail.png" },
            { name: "Interactivenn", img: "interactivenn-thumbnail.png" },
            { name: "RottingResearch", img: "rottingresearch-thumbnail.png" },
          ],
        },
        {
          title: "Front End",
          description:
            "I work primarily in React, Vue, and vanilla JS on the front end. I've also done some work with Angular, Jinja, and advanced customization in Wordpress and Wix.",
          samples: [
            { name: "Bad Bank", img: "badbank-thumbnail.png" },
            { name: "Clones", img: "clones-thumbnail.png" },
            { name: "Ms Pacman", img: "pacman-thumbnail.png" },
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
      <div class="card-top">
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
          <div style="margin-top: auto">
            <h1>Projects</h1>
          </div>
        </div>
      </div>

      <template v-for="(category, index) in categories" v-bind:key="index">
        <hr :class="index === 0 ? `hidden` : `visible`" />
        <div style="width: 100%">
          <div style="width: 100%; max-width: 700px; margin: 0px auto">
            <h3>{{ category.title }}</h3>
            <p :innerHTML="category.description"></p>
          </div>
          <div style="width: 100%; max-width: 700px; margin: 0px auto">
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
                  :class="{
                    'final-project':
                      category.samples.length % 2 > 0 &&
                      linkindex === category.samples.length - 1,
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
                class="view-projects-btn"
              >
                <div class="btn btn-primary view-projects-btn">
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
.card-top {
  width: 100%;
  display: flex;
  align-items: flex-end;
}
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
@media only screen and (max-width: 796px) {
  .project-links {
    flex-wrap: wrap;
  }
  .project-thumbnail {
    height: 100px;
  }
  .view-projects-btn {
    width: 100%;
    flex-grow: 1;
  }
}
@media only screen and (max-width: 576px) {
  .final-project {
    display: none;
  }
  .card-top {
    flex-wrap: wrap;
    justify-content: center;
  }
  .card-image-top-left {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .card-top h1 {
    text-align: center;
  }
}
</style>

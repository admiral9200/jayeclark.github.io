<script lang="js">
import { projects } from "@/scripts/projects";
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects,
      params: this.$route.params,
    }
  },
  computed: {
    sortedProjects() {
      const { section } = this.params;
      const newProjects = [];
      this.projects.forEach(p => {
        newProjects.push({ ...p });
      });
      if (section) {
        const index = newProjects.findIndex(x => x.slug === section);
        if (index > 0) {
          newProjects[index].order = 0;
        }
      }
      const sortedProjects = newProjects.sort((a,b) => a.order - b.order);
      return sortedProjects;
    }
  },
  mounted() {
    const images = Array.from(document.getElementsByTagName('img'));
    images.forEach((image) => {
      if (image.classList.contains('unprocessed') && image.classList.contains('projectsView-img')) {
        const currentSrc = image.getAttribute("src");
        const newSrc = new URL(`../assets/${currentSrc}`, import.meta.url);
        image.src = newSrc;
        image.classList.remove('unprocessed');
      }
    })
  }
}
</script>

<template>
  <main>
    <template v-for="(group, index) in sortedProjects" :key="index">
      <div :style="{ marginTop: index !== 0 ? '160px' : '' }">
        <div
          :id="group.category.toLowerCase().replace(/\s/g, ``)"
          class="card-grey"
        >
          <div
            class="card-white"
            :style="{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }"
          >
            <div
              class="card-content offset-small card-content-responsive-bottom"
            >
              <div style="display: block; justify-content: center">
                <div class="card-image-top-left">
                  <img
                    src="@/assets/projects.png"
                    style="float: none; max-width: 100%"
                    class="expanding-image"
                  />
                </div>
                <div class="projects-description">
                  <h2>{{ group.category }}</h2>
                  <p :innerHTML="group.description"></p>
                </div>
              </div>
            </div>

            <div class="card-content offset-none" style="padding-left: 0px">
              <template v-for="(project, pidx) in group.projects" :key="pidx">
                <hr :style="{ display: pidx === 0 ? 'none' : '' }" />
                <h3>{{ project.name }}</h3>
                <p
                  class="project-description pl-25px"
                  :innerHTML="project.description"
                ></p>
                <div class="project-description-container-detail">
                  <img
                    :src="`${project.thumbnail}`"
                    height="70"
                    style="border: 1px solid #ccc"
                    class="unprocessed projectsView-img"
                  />
                  <div>
                    <div
                      class="project-description"
                      style="
                        font-weight: bold;
                        margin-left: 10px;
                        padding-top: none;
                        align-items: center;
                      "
                    >
                      <template
                        v-for="(icon, iidx) in project.icons"
                        :key="iidx"
                      >
                        <img
                          width="16"
                          style="margin: 5px"
                          :src="`${icon}`"
                          class="unprocessed projectsView-img"
                        />
                      </template>
                      <span
                        :style="{
                          display:
                            project.subtitle && project.icons.length > 0
                              ? ''
                              : 'none',
                        }"
                        >&nbsp;&nbsp;|&nbsp;&nbsp;</span
                      >
                      <span
                        style="font-weight: bold"
                        :innerHTML="project.subtitle"
                      ></span>
                    </div>
                    <div style="margin-left: 10px">
                      <a
                        :href="project.url"
                        class="btn btn-primary btn-sm"
                        style="margin-right: 10px"
                        target="_blank"
                        >{{
                          group.category == "Open Source Software"
                            ? "See my PRs"
                            : "See it in action"
                        }}</a
                      >
                      <a
                        :href="project.github"
                        class="btn btn-default btn-sm"
                        target="_blank"
                        >See the code</a
                      >
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </main>
</template>

<style>
.project-description-container-detail {
  display: flex;
}
</style>

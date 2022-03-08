<script setup lang="ts">
import { RouterLink } from "vue-router";
interface Project {
  projectName: string;
  url: string;
}
interface Props {
  projects?: Array<Project>;
}
// eslint-disable-next-line vue/no-setup-props-destructure
const {
  projects = [
    { projectName: "Bad Bank", url: "https://jayeclark.github.io/banking" },
    { projectName: "Instaplate", url: "https://instaplate.herokuapp.com" },
    {
      projectName: "OSS Challenge",
      url: "https://github.com/jayeclark/jayeclark/blob/main/opensourcechallenge.md",
    },
  ],
} = defineProps<Props>();
</script>

<template>
  <div class="footer-hr"></div>
  <div class="footer-content">
    <div class="footer-copyright">
      <p id="footer-text" class="copyright" style="text-align: left">
        &copy; {{ new Date().getFullYear() }} Jay Clark. All rights reserved.
      </p>
    </div>
    <div class="footer-main">
      <dl>
        <template v-for="(project, index) in projects" v-bind:key="index">
          <dt class="footerli">
            <a
              class="footerlink"
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              >{{ project.projectName }}</a
            >
          </dt>
        </template>
      </dl>
    </div>
    <div class="footer-main">
      <dl>
        <dt class="footerli">
          <RouterLink to="/">
            <div class="footerlink">Home</div>
          </RouterLink>
        </dt>
        <dt class="footerli">
          <RouterLink to="/about">
            <div class="footerlink">About Me</div>
          </RouterLink>
        </dt>
        <dt class="footerli">
          <RouterLink to="/projects">
            <div class="footerlink">Projects</div>
          </RouterLink>
        </dt>
        <dt class="footerli">
          <RouterLink to="/contact">
            <div class="footerlink">Contact</div>
          </RouterLink>
        </dt>
      </dl>
    </div>
    <div class="footer-icons">
      <dl>
        <dt class="footerli footer-icon">
          <a
            class="footerlink"
            href="https://www.github.com/jayeclark"
            target="_blank"
            rel="noreferrer"
          >
            <img src="@/assets/github.png" width="26" />
          </a>
        </dt>
        <dt class="footerli footer-icon">
          <a
            class="footerlink"
            href="https://www.linkedin.com/in/jayeclark"
            target="_blank"
            rel="noreferrer"
          >
            <img src="@/assets/linkedin.png" width="30" />
          </a>
        </dt>
        <dt class="footerli footer-icon">
          <a
            class="footerlink"
            href="https://www.twitter.com/jennbot3000"
            target="_blank"
            rel="noreferrer"
          >
            <img src="@/assets/twitter.png" width="26" />
          </a>
        </dt>
      </dl>
    </div>
  </div>
</template>

<style>
@import "@/assets/bootstrap.min.css";
.footer-content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: right;
  margin: 0px calc(9% - 16px);
  width: calc(82% + 32px);
}
.footer-copyright {
  width: auto;
  text-align: left;
  flex-grow: 1;
}
.footer-hr {
  height: 40px;
}
.footerlink {
  font-weight: bold !important;
}
.footer-main {
  min-width: 150px;
  max-width: max-content;
  padding-right: 20px;
}
.footer-icons {
  width: fit-content;
  justify-content: left;
}
.footer-icon:hover {
  opacity: 0.7;
}

@media only screen and (max-width: 576px) {
  .footer-main {
    display: none;
  }
  .footer-icons dl {
    display: flex;
  }
  .footer-icons dt {
    margin-left: 10px;
  }
}
</style>

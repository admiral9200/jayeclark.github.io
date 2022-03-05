<script setup lang="ts">
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
  ],
} = defineProps<Props>();
</script>

<template>
  <div class="footer-hr">
    <hr />
  </div>
  <div style="display: flex; flex-wrap: nowrap; justify-content: right">
    <div class="footer-main">
      <dl>
        <template v-for="(project, index) in projects" v-bind:key="index">
          <dt class="footerli">
            <a class="footerlink" :href="project.url">{{
              project.projectName
            }}</a>
          </dt>
        </template>
      </dl>
    </div>
    <div class="footer-main">
      <dl>
        <dt class="footerli"><a class="footerlink" href="#home">Home</a></dt>
        <dt class="footerli">
          <a class="footerlink" href="about.html">About Me</a>
        </dt>
        <dt class="footerli">
          <a class="footerlink" href="#projects">Projects</a>
        </dt>
        <dt class="footerli">
          <a class="footerlink" href="contact.html">Contact</a>
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
    <div class="footer-copyright">
      <ul>
        <p id="footer-text" class="copyright"></p>
      </ul>
    </div>
  </div>
</template>

<style>
@import "@/assets/bootstrap.min.css";
.footerlink {
  font-weight: bold !important;
}

.footer-icons {
  width: fit-content;
  justify-content: left;
}
.footer-icon:hover {
  opacity: 0.7;
}
</style>

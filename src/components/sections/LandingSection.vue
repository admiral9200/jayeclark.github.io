<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="landing" id="home">
    <div class="landing-content">
      <h1>
        Jay Clark<br />
        wants to work for you.
      </h1>
      <p style="font-size: 1.75rem">
        I'm a full stack software engineer with a talent for DevOps, CI/CD, and
        ML engineering.
      </p>
      <RouterLink to="/projects"
        ><span class="btn btn-primary">See my work</span></RouterLink
      >
      <RouterLink to="/about#story"
        ><span class="btn btn-default">Read my story</span></RouterLink
      >
    </div>
    <div class="landing-photo">
      <img src="@/assets/profile.jpg" style="max-width: 100%" />
    </div>
  </div>
</template>

<style>
.landing {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
}

.landing-content {
  width: 450px;
  flex-shrink: 2;
  flex-grow: 1;
  margin-right: 20px;
}

.landing-photo {
  width: 450px;
  max-width: 550px;
  flex-shrink: 1;
  flex-grow: 2;
  height: inherit;
}

@media only screen and (max-width: 850px) {
  .landing {
    flex-wrap: wrap;
  }
  .landing-content {
    max-width: max-content;
  }
}
</style>

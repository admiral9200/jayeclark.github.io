<script setup lang="ts">
import { RouterLink } from "vue-router";
import router from "@/router";
</script>
<template>
  <nav class="navbar navbar-default navbar-fixed-top" id="navbar-index">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          onclick="$('.collapse').collapse('show')"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li
            :class="router.currentRoute.value.name == 'home' ? 'active' : null"
            id="home-nav"
          >
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li
            :class="router.currentRoute.value.name == 'about' ? 'active' : null"
          >
            <RouterLink to="/about">About Me</RouterLink>
          </li>
          <li
            :class="
              router.currentRoute.value.name == 'projects' ? 'active' : null
            "
            id="projects-nav"
          >
            <RouterLink to="/projects">Projects</RouterLink>
          </li>
          <li
            :class="
              router.currentRoute.value.name == 'contact' ? 'active' : null
            "
          >
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import "@/assets/bootstrap.min.css";
.navbar-nav > li > a {
  font-size: 1.6rem !important;
}
</style>

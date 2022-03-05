<script setup lang="ts">
import { computed } from "vue";
import router from "@/router";
import { RouterLink } from "vue-router";

const currentPage = computed(() => router.currentRoute.value.name);
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
          <li :class="currentPage == 'home' ? 'active' : null" id="home-nav">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li :class="currentPage == 'about' ? 'active' : null">
            <RouterLink to="/about.html">About Me</RouterLink>
          </li>
          <li
            :class="currentPage == 'projects' ? 'active' : null"
            id="projects-nav"
          >
            <RouterLink to="#projects">Projects</RouterLink>
          </li>
          <li :class="currentPage == 'projects' ? 'active' : null">
            <RouterLink to="contact.html">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import "@/assets/bootstrap.min.css";
</style>

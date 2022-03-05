<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/navigation/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="spacer"></div>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
body {
  background-color: rgb(237, 237, 237);
}
.spacer {
  height: 104px;
}
</style>

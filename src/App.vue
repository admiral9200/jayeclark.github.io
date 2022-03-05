<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBarVue from "@/components/navigation/NavBar.vue";
import FooterComponentVue from "@/components/footer/FooterComponent.vue";
</script>

<template>
  <NavBarVue />
  <div class="spacer"></div>
  <RouterView />
  <FooterComponentVue />
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

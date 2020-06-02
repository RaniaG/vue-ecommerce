<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/core/header";
import footer from "./components/core/footer";
export default {
  name: "App",
  components: {
    appHeader: header,
    appFooter: footer
  }
};
</script>

<style>
</style>

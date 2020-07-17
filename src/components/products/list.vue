<template>
  <div>
    list
    <app-paged-list col="3">
      <app-product-card product="sd" slot="list-item"></app-product-card>
    </app-paged-list>
  </div>
</template>

<script>
import card from "./card";

export default {
  components: {
    "app-product-card": card
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
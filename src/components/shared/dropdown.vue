<template>
  <div class="dropdown">
    <div @click="active=!active">
      <slot name="button"></slot>
    </div>
    <div class="dropdown__content" :style="{width:width}">
      <slot name="content" v-if="active"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["width"],
  data: function() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: relative;
  &__content {
    position: absolute;
    z-index: 10;
    // width: 10rem;
    right: 0;
  }
}
</style>
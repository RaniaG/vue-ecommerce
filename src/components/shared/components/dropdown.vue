<template>
  <!-- <div class="dropdown">
    <div @click="active=!active">
      <slot name="button"></slot>
    </div>
    <div class="dropdown__content" :style="{width:width}">
      <slot name="content" v-if="active"></slot>
    </div>
  </div>-->
  <div class="dropdown">
    <button
      class="dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <slot name="button"></slot>
    </button>
    <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" v-for="item in numberOfItems" :key="`dropdown-${item}`">
        <slot :name="`content-${item}`"></slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["width", "numberOfItems"],
  data: function() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  background-color: transparent;
}
.dropdown {
  &-item {
    font-size: 1.6rem;
    &:hover {
      cursor: pointer;
    }
    &.active,
    &:active {
      background-color: $primary-color;
    }
  }
}
</style>
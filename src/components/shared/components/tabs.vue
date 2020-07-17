<template>
  <div>
    <ul class="nav nav-pills justify-content-center">
      <a
        class="nav-item nav-link"
        :class="{active:item.key==activeComponent}"
        v-for="(item) in titles"
        :key="item.key"
        @click="activeComponent=item.key"
      >{{item.value}}</a>
    </ul>
    <div class="content">
      <slot :name="activeComponent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activeComponent: ""
    };
  },
  props: ["titles"],
  created() {
    this.activeComponent = this.titles[0].key;
  }
};
</script>

<style lang="scss" scoped>
.nav {
  .nav-pills &-item {
    font-size: 1.4rem;
    background-color: none;
    border: 1px solid transparent;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    font-weight: 700;
    color: $grey-2;
    &.active.nav-link {
      background-color: transparent;
      border-color: black;
      color: black;
    }
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
}
.content {
  padding: 3rem 0rem;
}
</style>
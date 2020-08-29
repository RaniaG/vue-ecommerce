<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row justify-content-center">
          <div v-for="item in page" :key="item.id">
            <slot name="list-item"></slot>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">
                <i class="fas fa-chevron-left"></i>
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                v-for="i in numberOfPages"
                :key="i"
              >{{i}}</button>
              <button type="button" class="btn btn-secondary">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagedListMixin from "../mixins/pagedList";
export default {
  mixins: [pagedListMixin],
  props: {
    col: String
  },
  created() {
    this.page = [1, 2, 3, 4];
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="../../assets/card-1.jpg" class="card-img" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">{{cartItem.title}}</h3>
          <div class="cart-text d-flex flex-row">
            <div
              class="filter-item"
              v-for="(filter,index) in cartItem.filters"
              :key="`filter-${filter.key}`"
            >
              <span>{{filter.key}}:</span>
              <span v-if="filter.type=='text'">{{filter.value}}</span>
              <div
                class="filter-color"
                v-else-if="filter.type=='color'"
                :style="{backgroundColor:filter.value}"
              ></div>
              <span v-if="index<cartItem.filters.length-1">,</span>
            </div>
          </div>
          <p class="card-text price">{{cartItem.price}}$</p>
          <p class="card-text">x{{cartItem.quantity}}</p>

          <p class="card-text">
            <span data-toggle="tooltip" title="Edit">
              <i class="far fa-edit"></i>
            </span>
            <span class="ml-2" data-toggle="tooltip" title="Delete">
              <i class="far fa-trash-alt"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItem"],
};
</script>

<style lang="scss" scoped>
i:hover {
  cursor: pointer;
  color: $primary-color;
}
.filter-item {
  margin: 0rem 0.2rem;
  color: $grey-3;
  @include flex-box;
}
.filter-color {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin-left: 0.4rem;
}
</style>
<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="../../assets/card-1.jpg" class="card-img" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">{{cartItem.title}}</h3>
          <p class="card-text price price--new">{{cartItem.price}}$</p>
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
</style>
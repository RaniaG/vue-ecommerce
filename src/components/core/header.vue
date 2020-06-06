<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">E-Commerce</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-auto">
          <router-link tag="li" class="nav-item" active-class="active" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" active-class="active" to="/products">
            <a class="nav-link">Products</a>
          </router-link>
        </ul>
        <transition
          leave-active-class="animate__animated animate__fadeOutRight 1s"
          enter-active-class="animate__animated animate__fadeInRight 1s"
        >
          <form class="form-inline my-2 my-lg-0" v-if="searchVisible">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </transition>
        <i class="fas fa-search fa-lg" @click="searchVisible=!searchVisible"></i>
        <app-dropdown width="10rem">
          <i class="far fa-user fa-lg" slot="button"></i>
          <ul class="list-group" slot="content">
            <li class="list-group-item">
              <i class="fas fa-shipping-fast"></i> Orders
            </li>
            <li class="list-group-item">
              <i class="far fa-heart fa-lg"></i> Wishlist
            </li>
          </ul>
        </app-dropdown>

        <app-dropdown width="10rem">
          <div slot="button" class="cart-btn">
            <i class="fas fa-shopping-cart fa-lg"></i>
          </div>
          <ul class="list-group" slot="content">
            <li class="list-group-item">
              <app-cart-item></app-cart-item>
            </li>
            <li class="list-group-item">
              <app-cart-item></app-cart-item>
            </li>
          </ul>
        </app-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
import cartItem from "../cart/cart-item";
export default {
  data: function() {
    return {
      searchVisible: false,
      searchText: ""
    };
  },
  components: {
    "app-cart-item": cartItem
  }
};
</script>

<style lang="scss" scoped>
.fas,
.far {
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
  }
}
.cart-btn::before {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: red;
  right: 0;
  z-index: 10;
}
</style>
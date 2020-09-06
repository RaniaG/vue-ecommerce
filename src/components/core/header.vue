<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand logo">E-Commerce</a>
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
        <ul class="navbar-nav mr-auto ml-auto">
          <router-link tag="li" class="nav-item" active-class="active" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" active-class="active" to="/products">
            <a class="nav-link">Products</a>
          </router-link>
        </ul>
        <div class="d-flex flex-row align-items-center">
          <transition
            leave-active-class="animate__animated animate__fadeOutRight 0.1s"
            enter-active-class="animate__animated animate__fadeInRight 0.1s"
          >
            <form class="form-inline my-2 my-lg-0" v-if="searchVisible">
              <input
                class="form-control mr-sm-2 form-control-lg"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </transition>
          <i class="fas fa-search fa-lg" @click="searchVisible=!searchVisible"></i>
          <app-dropdown width="10rem" :numberOfItems="2">
            <i class="far fa-user fa-lg" slot="button"></i>
            <span slot="content-1">
              <i class="fas fa-shipping-fast"></i> Orders
            </span>
            <span slot="content-2">
              <i class="far fa-heart fa-lg"></i> Wishlist
            </span>
          </app-dropdown>
          <div class="shopping-cart">
            <span class="shopping-cart__count">1</span>
            <i class="fas fa-shopping-cart fa-lg"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchVisible: false,
      searchText: ""
    };
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

.logo {
  font-size: 2rem;
  font-weight: 900;
}
.navbar {
  padding: 2rem 2rem;
}
.shopping-cart {
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &__count {
    position: absolute;
    content: "";
    border-radius: 50%;
    padding: 0 0.5rem;
    @include flex-box;
    right: -25%;
    top: -50%;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
}
</style>
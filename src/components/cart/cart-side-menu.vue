<template>
  <div>
    <div class="side-menu-overlay" v-if="value" @click="hideCart"></div>
    <transition name="slide-left">
      <div class="side-menu" v-if="value">
        <div class="side-menu__header">
          <span>Cart</span>
          <i class="fas fa-times" @click="hideCart"></i>
        </div>
        <div class="side-menu__body">
          <app-cart-item v-for="item in cartItems" :key="item.id" :cartItem="item"></app-cart-item>
        </div>
        <div class="side-menu__footer cart-footer">
          <div class="cart-footer__total">
            <h2 class="heading-2">SubTotal:</h2>
            <span class="price">{{total}}$</span>
          </div>
          <div class="cart-footer__buttons">
            <button class="button button--secondary">view cart</button>
            <button class="button button--primary">check out</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import cartItem from "./cart-item";
export default {
  components: { "app-cart-item": cartItem },
  data: function () {
    return {
      cartItems: [
        {
          id: 1,
          image: "../../assets/card-1.jpg",
          title: "Analogue Resin Strap 1",
          price: 30,
          quantity: 2,
          filters: [
            { key: "size", type: "text", value: "S" },
            { key: "color", type: "color", value: "blue" },
          ],
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
        {
          id: 2,
          image: "../../assets/card-2.jpg",
          title: "Analogue Resin Strap 2",
          price: 30.5,
          quantity: 2,
        },
      ],
    };
  },
  props: ["value"],
  computed: {
    total() {
      return this.cartItems.map((e) => e.price).reduce((acc, e) => acc + e);
    },
  },
  methods: {
    hideCart() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  right: 0%;
  overflow-y: auto;
  &__header {
    position: fixed;
    z-index: 10;
    width: inherit;
  }
  &__body {
    margin-top: 5rem;
  }
}
.slide-left-enter-active {
  animation: slide-in 0.2s forwards;
}
.slide-left-leave-active {
  animation: slide-out 0.2s forwards;
}
.cart-footer {
  padding: 1rem 2rem;
  &__total {
    @include flex-box(row, space-between);
  }
  &__buttons {
    @include flex-box(column);
  }
}
@keyframes slide-in {
  from {
    right: -100%;
  }
  to {
    right: 0%;
  }
}
@keyframes slide-out {
  from {
    right: 0%;
  }
  to {
    right: -100%;
  }
}
</style>
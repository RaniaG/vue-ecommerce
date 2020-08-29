<template>
  <div class="product-card">
    <img src="@/assets/card-1.jpg" />
    <div class="product-card__overlay">
      <div class="product-card__buttons">
        <div class="btn btn-success">Quick View</div>
        <div class="btn btn-success">Add to Cart</div>
      </div>
      <img src="@/assets/card-2.jpg" />
    </div>
    <div class="product-card__fav">
      <i class="fas fa-heart fav" v-if="isFavourite" @click="isFavourite=!isFavourite"></i>
      <i class="far fa-heart fav" v-else @click="isFavourite=!isFavourite"></i>
    </div>
    <div class="label-container">
      <div
        class="label"
        v-for="label in labels"
        :key="label.text"
        :style="{backgroundColor:label.color}"
      >{{label.text}}</div>
    </div>
    <div class="product-card__title">
      <div>{{title}}</div>
      <div>
        <span class="price price--old" v-if="price.oldPrice">${{price.oldPrice}}</span>
        <span class="price" :class="{'price--new':price.oldPrice}">${{price.currentPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isFavourite: false,
      labels: [
        { text: "New", color: "#0E862E" },
        { text: "-25%", color: "#E54600" }
      ],
      title: "Analogue Resin Strap",
      price: { currentPrice: 20, oldPrice: 40 }
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 28rem;
}

.product-card {
  position: relative;
  overflow: hidden;
  min-width: 25rem;
  &__title {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
  &__fav {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    font-size: 1.6rem;
  }

  &__buttons {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 100%;
    height: 100%;
    flex-direction: column;
    & .btn {
      font-size: 1.4rem;
      border-radius: 2rem;
      background-color: white;
      border-color: white;
      color: black;
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
    }
  }

  &__overlay {
    width: 100%;
    top: 0;
    position: absolute;
    left: 0;
    opacity: 0;
    transition-timing-function: ease-in-out;
    transition-duration: 0.5s;

    & img {
      opacity: 0;
      transform: scale(1.1);
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
      filter: brightness(90%);
    }
  }
  &:hover &__overlay,
  &:hover &__overlay img {
    opacity: 1;
  }
  &:hover &__overlay img {
    transform: scale(1);
  }
}
</style>
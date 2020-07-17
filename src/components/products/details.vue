<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-6">
            <div class="product-details__images">
              <div class="product-details__images__group">
                <div class="product-details__images__group__item">
                  <img src="@/assets/details-1.jpg" alt />
                </div>
                <div class="product-details__images__group__item">
                  <img src="@/assets/details-2.jpg" alt />
                </div>
                <div class="product-details__images__group__item">
                  <img src="@/assets/details-3.jpg" alt />
                </div>
                <div class="product-details__images__group__item">
                  <img src="@/assets/details-4.jpg" alt />
                </div>
              </div>
              <div class="product-details__images__main">
                <div class="label-container">
                  <div
                    class="label"
                    v-for="label in labels"
                    :key="label.text"
                    :style="{backgroundColor:label.color}"
                  >{{label.text}}</div>
                </div>
                <img src="@/assets/details-4.jpg" alt />
                <!-- <zoom-on-hover img-normal="/assets/details-4.jpg" :scale="1.5"></zoom-on-hover> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="product-details__title">Analogue Resin Strap</div>
            <div class="row justify-content-between align-items-center py-4 no-gutters">
              <div class="col-xs-6">
                <div class="product-details__price">$30.00</div>
              </div>
              <div class="col-xs-6">
                <app-rating></app-rating>
              </div>
            </div>
            <p class="product-details__info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem aut labore cupiditate corporis dicta sed
              et vel facere natus vitae! Doloremque eius libero adipisci
              error vel veniam quo sapiente nihil.
            </p>

            <div class="product-details__selected-size">Size:{{selectedSize}}</div>
            <div class="product-details__size-picker">
              <div
                class="product-details__size-picker__item"
                :class="{'active':selectedSize==size}"
                @click="selectedSize=size"
                v-for="size in sizes"
                :key="size"
              >{{size}}</div>
            </div>
            <div class="d-flex flex-wrap align-items-center no-gutters">
              <div class="product-details__counter">
                <div class="product-details__counter__btn" @click="decrement">
                  <i class="fas fa-minus"></i>
                </div>
                <div class="product-details__counter__btn">{{count}}</div>
                <div class="product-details__counter__btn" @click="increment">
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div class="product-details__add-to-cart">Add to cart</div>
              <i class="fas fa-heart fav" v-if="isFavourite" @click="isFavourite=!isFavourite"></i>
              <i class="far fa-heart fav" v-else @click="isFavourite=!isFavourite"></i>
            </div>
            <div class="product-details__tags">
              <span class="product-details__tags__title">Categories:</span>
              <span v-for="tag in categories" :key="tag" class="link">{{tag}},</span>
            </div>
            <div class="product-details__tags">
              <span class="product-details__tags__title">Tags:</span>
              <span v-for="tag in categories" :key="tag" class="link">{{tag}},</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutters justify-content-center product-details__description">
      <div class="col-md-10">
        <app-tabs :titles="tabs">
          <div
            slot="description"
          >description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim inventore, ex sunt voluptatum dicta ad et, nobis ratione quaerat qui beatae possimus aperiam soluta, nam assumenda minus est saepe?</div>
          <div slot="reviews">reviews</div>
          <div slot="warranty">
            <div class="product-details__description__title">Warranty</div>
            <div>warrany Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim inventore, ex sunt voluptatum dicta ad et, nobis ratione quaerat qui beatae possimus aperiam soluta, nam assumenda minus est saepe?</div>
          </div>
        </app-tabs>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h2 class="heading-1">You may also like</h2>
      </div>
      <div class="col-md-10">
        <div class="row product-details__related justify-content-between">
          <div class="col-xs-2">
            <app-product-card></app-product-card>
          </div>
          <div class="col-xs-2">
            <app-product-card></app-product-card>
          </div>
          <div class="col-xs-2">
            <app-product-card></app-product-card>
          </div>
          <div class="col-xs-2">
            <app-product-card></app-product-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "./card";
export default {
  components: {
    "app-product-card": card
  },
  data: function() {
    return {
      labels: [
        { text: "New", color: "#0E862E" },
        { text: "-25%", color: "#E54600" }
      ],
      sizes: ["xs", "s", "L"],
      selectedSize: "xs",
      count: 1,
      isFavourite: false,
      categories: ["Women", "All"],
      tabs: [
        { key: "description", value: "Description" },
        { key: "warranty", value: "Warranty & Shipping" },
        { key: "reviews", value: "Reviews" }
      ]
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 1) this.count--;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-details {
  &__images {
    @include for-desktop-up {
      @include flex-box(row, center, flex-start);
    }
    @include flex-box(column-reverse);
    &__group {
      @include for-desktop-up {
        @include flex-box(column);
        width: 15%;
      }
      width: 100%;
      @include flex-box(row, space-between);
      &__item {
        & img {
          width: 100%;
        }
        width: 10rem;
        @include for-desktop-up {
          width: 7rem;
          padding-bottom: 1rem;
        }
      }
    }
    &__main {
      width: 100%;
      position: relative;
      img {
        width: 100%;
      }
    }
  }
  &__title {
    font-weight: 700;
    font-size: 1.6rem;
  }
  &__price {
    font-size: 2.2rem;
    color: $grey-2;
  }
  &__info {
    color: $grey-3;
  }
  &__size-picker {
    margin: 1rem 0;
    @include flex-box(row, flex-start);
    &__item {
      border: 1px solid $grey-2;
      border-radius: 2rem;
      width: 3rem;
      height: 3rem;
      text-transform: uppercase;
      margin-right: 0.5rem;
      @include flex-box;
      &:hover,
      &.active {
        background-color: $grey-2;
        color: white;
        cursor: pointer;
      }
    }
  }
  &__selected-size {
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-top: 3rem;
  }
  &__counter {
    border: 1px solid black;
    font-weight: 700;
    @include flex-box(row, space-between);
    overflow: hidden;
    border-radius: 3rem;
    order: 1;
    &__btn,
    &__btn i {
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
    }
    &__btn i:hover {
      cursor: pointer;
      color: $primary-color;
    }
  }
  &__add-to-cart {
    @include flex-box;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    background-color: $primary-color;
    padding: 0.9rem;

    border-radius: 3rem;
    &:hover {
      background-color: black;
      cursor: pointer;
    }
    order: 3;
    min-width: 16rem;
    width: 100%;
    margin-top: 1rem;
    @include for-tablet-landscape-up {
      order: 2;
      width: 15rem;
      margin-top: 0px;
    }
  }
  &__tags {
    margin-top: 2rem;
    &__title {
      color: $grey-2;
    }
  }
  &__description {
    margin: 5rem 0;
    background-color: $grey-1;
    padding: 5rem 0;
    color: $grey-2;
    text-align: center;
    &__title {
      font-weight: 700;
      color: black;
      padding-bottom: 1rem;
    }
  }
  &__related {
    padding: 10rem 0;
  }
}
.fav {
  font-size: 3rem;
  order: 2;
  @include for-tablet-landscape-up {
    order: 3;
  }
}
</style>
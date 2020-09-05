<template>
  <div>
    <div class="side-menu-overlay" v-if="showFilter" @click="showFilter=false">anyway</div>
    <div class="side-menu" :class="{'active':showFilter,'inactive':!showFilter}">
      <div class="side-menu__header">
        <span>Filter</span>
        <i class="fas fa-times" @click="showFilter=false"></i>
      </div>
      <div class="side-menu__section" v-for="item in filtersList" :key="'filter-'+item.header">
        <div class="side-menu__section__title">{{item.header}}</div>
        <div class="side-menu__section__item">
          <input type="checkbox" :id="check" />
          <label for="check">Label</label>
        </div>
        <div class="side-menu__section__item">
          <input type="checkbox" id="check2" />
          <label for="check2">
            <div class="side-menu__section__item__color"></div>
          </label>
        </div>
        <div class="side-menu__section__title">Price</div>
        <div class="side-menu__section__item">
          <app-range-slider
            :min="minPrice"
            :max="maxPrice"
            :formatter="formatter"
            v-model="priceRange"
            width="100%"
          ></app-range-slider>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="list-header">
          <p class="link" @click="showFilter=!showFilter">
            <i class="fas fa-filter"></i> Filter
          </p>
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Sort By</button>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" v-for="item in sortList" :key="'sort-'+item">{{item}}</a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div v-for="item in page" :key="item.id" class="list-item">
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
  data: function() {
    return {
      showFilter: false,
      minPrice: 0,
      maxPrice: 100,
      formatter: val => `$${val}`,
      priceRange: [0, 100]
    };
  },
  mixins: [pagedListMixin],
  props: {
    col: String
  },
  created() {
    this.page = [1, 2, 3, 4];
    this.getSortList();
    this.getFiltersList();
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  margin: 1rem;
}
.dropdown {
  &-toggle {
    border: 1px solid black;
    padding: 1rem 2rem;
    border-radius: 2rem;
  }
}
.list-header {
  @include flex-box(row, space-between, baseline);
}
.side-menu {
  position: absolute;
  width: 35rem;
  background: white;
  z-index: 4;
  top: 0;
  height: 100%;

  &.active {
    animation: Slide-Right;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  &.inactive {
    animation: Slide-left;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  &-overlay {
    width: 100%;
    z-index: 4;
    background-color: black;
    opacity: 50%;
    position: absolute;
    height: 100%;
    top: 0;
  }
  &__header {
    background-color: black;
    color: white;
    padding: 1rem;
    font-size: 2rem;
    @include flex-box(row, space-between);
    & span {
      font-weight: 700;
    }
    & i:hover {
      cursor: pointer;
    }
  }
  &__section {
    margin: 1rem;
    &__title {
      padding: 1rem 0;
      font-weight: 700;
      position: relative;
      display: inline-block;
      font-size: 1.8rem;
      &:after {
        position: absolute;
        content: "";
        width: 90%;
        border-bottom: 2px solid black;
        bottom: 0;
        left: 0;
      }
    }
    &__item {
      margin-top: 1rem;
      @include flex-box(row, start, center);
      & label {
        margin-left: 1rem;
        margin-bottom: 0;
      }
      &__color {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: red;
      }
    }
    &__body {
      max-width: 3rem;
    }
  }
}
@keyframes Slide-Right {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}
@keyframes Slide-left {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
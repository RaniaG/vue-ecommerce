<template>
  <div>
    <div class="side-menu-overlay" v-if="showFilter" @click="showFilter=false">anyway</div>
    <div class="side-menu" :class="{'active':showFilter,'inactive':!showFilter}">
      <div class="side-menu__header">
        <span>Filter</span>
        <i class="fas fa-times" @click="showFilter=false"></i>
      </div>
      <div class="side-menu__section" v-for="item in filtersList" :key="`filter-${item.header}`">
        <div class="side-menu__section__title">{{item.header}}</div>
        <div class="side-menu__section__body" v-if="item.type=='text'">
          <div
            class="side-menu__section__item"
            v-for="value in item.values"
            :key="`filter-value-${value}`"
          >
            <input type="checkbox" :id="`check-${value}`" />
            <label :for="`check-${value}`">{{value}}</label>
          </div>
        </div>
        <div class="side-menu__section__body" v-else-if="item.type=='color'">
          <div
            class="side-menu__section__item"
            v-for="value in item.values"
            :key="`filter-value-${value}`"
          >
            <input type="checkbox" :id="`check-${value}`" />
            <label :for="`check-${value}`">
              <div class="side-menu__section__item__color" :style="{'background-color':value}"></div>
            </label>
          </div>
        </div>
        <div class="side-menu__section__body" v-else-if="item.type=='range'">
          <div class="side-menu__section__item">
            <app-range-slider
              :min="item.range[0]"
              :max="item.range[1]"
              :formatter="formatter"
              v-model="priceRange"
              width="100%"
            ></app-range-slider>
          </div>
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

            <div class="dropdown-menu dropdown-menu-lg-left" aria-labelledby="dropdownMenuLink">
              <a
                class="dropdown-item"
                :class="{'active':sortBy==item}"
                @click="sortBy=item"
                v-for="item in sortList"
                :key="'sort-'+item"
              >{{item}}</a>
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
            <div class="pagination">
              <button type="button" class="pagination__btn" v-if="pageNumber>1">Prev</button>
              <button
                type="button"
                class="pagination__btn"
                :class="{active:i==pageNumber}"
                v-for="i in numberOfPages"
                :key="i"
              >{{i}}</button>
              <button type="button" class="pagination__btn" v-if="pageNumber<numberOfPages">Next</button>
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
  &-menu {
    font-size: 1.6rem;
  }
  &-item {
    &:hover {
      cursor: pointer;
    }
    &.active,
    &:active {
      background-color: $primary-color;
    }
  }
}
.list-header {
  @include flex-box(row, space-between, baseline);
  width: 100%;
}
.side-menu {
  position: fixed;
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
    position: fixed;
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
      max-height: 20rem;
      overflow-y: auto;
      overflow-x: hidden;
      margin: 1rem 0;
    }
  }
}
.vue-range-slider {
  margin-top: 3rem;
}
.pagination {
  font-size: 1.6rem;
  margin: 5rem 0;
  @include flex-box(row, center, center, flex-start, wrap);
  &__btn {
    border: none;
    background-color: transparent;
    margin: 0 0.2rem;
    &:hover,
    &.active {
      color: $red-color;
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
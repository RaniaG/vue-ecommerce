<template>
  <div>
    <div class="side-menu-overlay" v-if="showFilter" @click="showFilter=false"></div>
    <transition name="slide-right">
      <div class="side-menu" v-if="showFilter">
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
              <input
                type="checkbox"
                :id="`check-${value}`"
                :value="value"
                v-model="filtersValues[item.header].values"
              />
              <label :for="`check-${value}`">{{value}}</label>
            </div>
          </div>
          <div class="side-menu__section__body" v-else-if="item.type=='color'">
            <div
              class="side-menu__section__item"
              v-for="value in item.values"
              :key="`filter-value-${value}`"
            >
              <input
                type="checkbox"
                :id="`check-${value}`"
                :value="value"
                v-model="filtersValues[item.header].values"
              />
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
                v-model="filtersValues[item.header].range"
                width="100%"
              ></app-range-slider>
            </div>
          </div>
        </div>
        <div class="side-menu__footer p-3">
          <button class="button button--secondary" @click="filter">Clear Filters</button>
          <button class="button button--primary" @click="filter">Apply Filters</button>
        </div>
      </div>
    </transition>
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
      formatter: val => `$${val}`,
      priceRange: [0, 100],
      showFilter: false
    };
  },
  mixins: [pagedListMixin],
  props: {
    col: String,
    hasFilters: String
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

.slide-right-enter-active {
  animation: slide-in 0.2s forwards;
}
.slide-right-leave-active {
  animation: slide-out 0.2s forwards;
}
@keyframes slide-in {
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
}
@keyframes slide-out {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}
</style>
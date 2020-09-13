<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <div class="card">
                  <div class="row no-gutters">
                    <div>
                      <img :src="item.image" class="img-fluid" alt="Responsive image" />
                    </div>
                    <div>
                      <div class="card-body">
                        <h2 class="card-title heading-2">{{item.title}}</h2>
                        <div class="cart-text d-flex flex-row">
                          <div
                            class="filter-item"
                            v-for="(filter,index) in item.filters"
                            :key="`filter-${item.id}-${filter.key}`"
                          >
                            <span class="text-muted">{{filter.key}}:</span>
                            <span class="text-muted" v-if="filter.type=='text'">{{filter.value}}</span>
                            <div
                              class="filter-color"
                              v-else-if="filter.type=='color'"
                              :style="{backgroundColor:filter.value}"
                            ></div>
                            <span class="text-muted" v-if="index<item.filters.length-1">,</span>
                          </div>
                        </div>
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
              </td>
              <td>
                <span class="price price--old" v-if="item.price.oldPrice">${{item.price.oldPrice}}</span>
                <span
                  class="price"
                  :class="{'price--new':item.price.oldPrice}"
                >${{item.price.currentPrice}}</span>
              </td>
              <td>{{item.quantity}}</td>
              <td>${{item.price.currentPrice*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <div class="row justify-content-end">
          <div class="col-md-3">
            <div class="d-flex flex-row align-items-center">
              <h2 class="heading-2">SUBTOTAL: ${{subTotal}}</h2>
            </div>
            <button class="button button--primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      cartItems: [
        {
          id: 1,
          title: "La Bohème Rose Gold",
          price: { currentPrice: 20, oldPrice: 40 },
          quantity: 2,
          filters: [
            { key: "size", type: "text", value: "S" },
            { key: "color", type: "color", value: "blue" }
          ],
          image: require("../../assets/card-1.jpg")
        },
        {
          id: 2,
          title: "La Bohème Rose Gold",
          price: { currentPrice: 20, oldPrice: 40 },
          quantity: 2,
          filters: [
            { key: "size", type: "text", value: "S" },
            { key: "color", type: "color", value: "blue" }
          ],
          image: require("../../assets/card-1.jpg")
        }
      ]
    };
  },
  computed: {
    subTotal() {
      return this.cartItems
        .map(e => e.price.currentPrice)
        .reduce((acc, e) => acc + e);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 20rem;
  margin: 1rem;
}
.card {
  border: none;
}
i:hover {
  cursor: pointer;
  color: $primary-color;
}
.filter-color {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin-left: 0.4rem;
}
.filter-item {
  margin: 0rem 0.2rem;
  color: $grey-3;
  @include flex-box;
}
.table th {
  border-top: none;
}
</style>
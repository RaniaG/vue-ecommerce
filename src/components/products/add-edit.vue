<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row">
          <div class="col-md-6">
            <div class="img-group">
              <div class="img-group__group">
                <div class="img-group__group__item">
                  <img :src="product.images[0]" @click="selectImage(0)" alt />
                </div>
                <div class="img-group__group__item">
                  <img :src="product.images[1]" @click="selectImage(1)" alt />
                </div>
                <div class="img-group__group__item">
                  <img :src="product.images[2]" @click="selectImage(2)" alt />
                </div>
                <div class="img-group__group__item">
                  <img :src="product.images[3]" @click="selectImage(3)" alt />
                </div>
              </div>
              <div class="img-group__main">
                <img :src="product.images[selectedImageIndex]" alt @click="showPicker" />
                <input
                  type="file"
                  hidden
                  ref="imagePicker"
                  @change="updateImage($event.target.files[0])"
                  accept="image/jpg, image/jpeg, image/png"
                />

                <!-- <zoom-on-hover img-normal="/assets/details-4.jpg" :scale="1.5"></zoom-on-hover> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group input-group-lg">
              <h2 class="heading-2">Title</h2>
              <input type="text" placeholder="Title" v-model="product.title" class="form-control" />
            </div>
            <div class="form-group my-sm-3 input-group-lg">
              <h2 class="heading-2">Brief</h2>
              <textarea v-model="product.brief" class="form-control" placeholder="Description" />
            </div>
            <h2 class="heading-2">Pricing</h2>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="product.isOnSale" />
              <label class="form-check-label ml-3">On Sale</label>
            </div>
            <div class="form-group form-row my-sm-3 input-group-lg">
              <div class="col-md-6">
                <label for="currentPrice">Current Price</label>
                <input
                  type="text"
                  class="form-control col"
                  placeholder="Price"
                  id="currentPrice"
                  v-model="product.price.new"
                />
              </div>
              <div class="col-md-6" v-show="product.isOnSale">
                <label for="oldPrice">Old Price</label>
                <input
                  type="text"
                  class="form-control col"
                  placeholder="Old Price"
                  id="oldPrice"
                  v-model="product.price.old"
                />
              </div>
            </div>
            <div class="form-group input-group-lg">
              <h2 class="heading-2">Categories</h2>
              <select
                class="form-control form-control-lg"
                @change="addCategory($event.target.value)"
                ref="categorySelect"
              >
                <option selected disabled>Select Category</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{cat}}</option>
              </select>
            </div>
            <div class="container" v-show="product.categories.length>0">
              <span
                class="badge badge-pill badge-secondary"
                v-for="item in product.categories"
                v-bind:key="item"
              >
                {{item}}
                <i class="fas fa-times-circle" @click="deleteCategory(item)"></i>
              </span>
            </div>
            <div class="form-group input-group-lg">
              <h2 class="heading-2">Tags</h2>
              <input
                class="form-control"
                type="text"
                ref="tagInput"
                @keydown.enter="addTag($event.target.value)"
                placeholder="Tag"
              />
            </div>
            <div class="container" v-show="product.tags.length>0">
              <span
                class="badge badge-pill badge-secondary"
                v-for="item in product.tags"
                v-bind:key="item"
              >
                {{item}}
                <i class="fas fa-times-circle" @click="deleteTag(item)"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <h2 class="heading-2">Variations</h2>
            <div class="form-group">
              <h3 class="heading-3">Colors</h3>
              <button class="btn btn-primary" @click="pickColor">
                <i class="fas fa-plus"></i>
              </button>
              <div class="container" v-show="product.colors.length>0">
                <span
                  class="badge badge-pill"
                  v-for="item in product.colors"
                  v-bind:style="{backgroundColor:item}"
                  v-bind:key="item"
                >
                  <i class="fas fa-times-circle" @click="deleteColor(item)"></i>
                </span>
              </div>
              <input type="color" hidden="true" ref="colorPicker" @change="addColor($event.target)" />
            </div>
            <div class="form-group">
              <h3 class="heading-3">Sizes</h3>
              <div class="container" v-show="product.sizes.length>0">
                <span
                  class="badge badge-pill badge-secondary"
                  v-for="item in product.sizes"
                  v-bind:key="item"
                >
                  {{item}}
                  <i class="fas fa-times-circle" @click="deleteSize(item)"></i>
                </span>
              </div>
              <input type="text" placeholder="Size" @keydown.enter="addSize" v-model="size" />
            </div>
          </div>
          <div class="col-md-6">
            <h2 class="heading-2">Quantity</h2>
            <table
              class="table table-bordered table-responsive"
              v-if="product.colors.length>0||product.sizes.length>0"
            >
              <thead>
                <tr>
                  <th scope="col">Colors/Sizes</th>
                  <th v-for="s in product.sizes" v-bind:key="s">{{s}}</th>
                  <th v-if="product.sizes.length==0">No Size Variation</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="c in product.colors" v-bind:key="c">
                  <th scope="row" v-bind:style="{backgroundColor:c}"></th>
                  <td v-for="s in product.sizes" v-bind:key="s">
                    <input
                      type="text"
                      placeholder="Quantity"
                      @blur="addQuantity(c,s,$event.target.value)"
                    />
                  </td>
                  <td v-if="product.sizes.length==0">
                    <input
                      type="text"
                      placeholder="Quantity"
                      @blur="addQuantity(c,null,$event.target.value)"
                    />
                  </td>
                </tr>
                <tr v-if="product.colors.length==0">
                  <td>No Color Variation</td>
                  <td v-for="s in product.sizes" v-bind:key="s">
                    <input
                      type="text"
                      placeholder="Quantity"
                      @blur="addQuantity(null,s,$event.target.value)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input v-else type="text" placeholder="Quantity" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group my-5 input-group-lg">
              <h2 class="heading-2">Description</h2>
              <textarea
                v-model="product.description"
                class="form-control"
                placeholder="Description"
              />
            </div>
            <div class="form-group my-5 input-group-lg">
              <h2 class="heading-2">Warranty</h2>
              <textarea v-model="product.warranty" class="form-control" placeholder="Description" />
            </div>
            <div class="form-group my-5 input-group-lg">
              <h2 class="heading-2">Shipping</h2>
              <textarea v-model="product.shipping" class="form-control" placeholder="Description" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 d-flex justify-content-end">
            <button class="btn btn-secondary">Cancel</button>
            <button class="btn btn-primary">Submit</button>
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
      product: {
        title: "Hello",
        price: {
          old: 0,
          new: 0
        },
        brief: "",
        description: "",
        sizes: [],
        colors: [],
        categories: [],
        tags: [],
        warranty: "",
        shipping: "",
        isOnSale: false,
        quantities: [],
        images: [
          require("../../assets/card-1.jpg"),
          require("../../assets/card-2.jpg"),
          require("../../assets/card-3.jpg"),
          require("../../assets/card-4.jpg")
        ]
      },
      selectedImageIndex: 0,
      size: "",
      categories: ["Cat 1", "Cat 2", "Cat 3", "Cat 4"]
    };
  },
  methods: {
    addSize() {
      this.product.sizes.push(this.size);
      this.size = "";
    },
    deleteSize(size) {
      let index = this.product.sizes.findIndex(e => e == size);
      this.product.sizes.splice(index, 1);
    },
    pickColor() {
      this.$refs.colorPicker.click();
    },
    addColor(element) {
      this.product.colors.push(element.value);
    },
    deleteColor(color) {
      let index = this.product.colors.findIndex(e => e == color);
      this.product.colors.splice(index, 1);
    },
    addQuantity(color, size, quantity) {
      var q = this.product.quantities.find(
        e => e.size == size && e.color == color
      );
      if (q) {
        q.quantity = quantity;
      } else {
        this.product.quantities.push({ size, color, quantity });
      }
    },
    showPicker() {
      this.$refs.imagePicker.click();
    },
    selectImage(index) {
      this.selectedImageIndex = index;
    },
    updateImage(src) {
      this.product.images.splice(
        this.selectedImageIndex,
        0,
        URL.createObjectURL(src)
      );
    },
    addCategory(cat) {
      let index = this.product.categories.findIndex(e => e == cat);
      if (index < 0) this.product.categories.push(cat);
      this.$refs.categorySelect.selectedIndex = 0;
    },
    deleteCategory(cat) {
      let index = this.product.categories.findIndex(e => e == cat);
      this.product.categories.splice(index, 1);
    },
    addTag(tag) {
      let index = this.product.tags.findIndex(
        e => e.toLowerCase() == tag.toLowerCase()
      );
      if (index < 0) this.product.tags.push(tag);
      this.$refs.tagInput.value = "";
    },
    deleteTag(tag) {
      let index = this.product.tags.findIndex(e => e == tag);
      this.product.tags.splice(index, 1);
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.img-group__group__item,
.img-group__main {
  border: 1px solid black;
  transition-duration: 0.2s;
  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
}

.product-details {
  &__title {
    font-weight: 700;
    font-size: 1.6rem;
  }
}
.container {
  border: 1px solid black;
}
.badge {
  font-size: 1.2rem;
}
.fa-times-circle:hover {
  cursor: pointer;
}
</style>
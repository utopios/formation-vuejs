<template lang="">
  <div>
    <!--<button @click="addProduct">Ajouter produit</button>-->
    <FormComponent @add-product="addProduct"/>
  </div>
  <div v-if="products.length > 0">
    <ProductComponent
      v-for="product in products"
      :product="product"
      :key="product"
      @get-data="getDataFromChild"
    >
        <template  v-slot:description="slotProps">
            <div>{{slotProps.product.description}}</div>
        </template>
    </ProductComponent>
  </div>
  <div v-else>
    Loading...
  </div>
</template>
<script>
import ProductComponent from "./ProductComponent.vue";
import { getProducts } from "./../service/ApiService";
import FormComponent from "./FormComponent.vue"
export default {
  methods: {
    addProduct(product) {
    //   this.count++;
    //   const product = { title: "title " + this.count, price: 10 };
    //   this.products.push(product);
    //   console.log(this.products);
    this.products.push(product)
    },
    getDataFromChild(data) {
        console.log(data)
    }
  },
  data() {
    return {
      products: [],
      count: 0,
    };
  },
  components: {
    ProductComponent,
    FormComponent
  },
  mounted() {
    getProducts().then((res) => {
        this.products = res;
      });
  },
};
</script>
<style lang=""></style>

<template lang="">
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label>Titre</label><input type="text" v-model="product.title" />
      </div>
      <div>
        <label>Prix</label><input type="text" v-model="product.price" />
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  </div>
</template>
<script>
 import {mapMutations} from "vuex"
import { mapActions } from "vuex";
export default {
  name: "form-product",
  data() {
    return {
      product: {
        title: "",
        price: 0,
      },
    };
  },
  methods: {
      ...mapMutations([
          'addProduct'
      ]),
    ...mapActions(["actionAddProduct"]),
    submitForm() {
      this.actionAddProduct({ ...this.$data.product });
    },
  },
};
</script>
<style lang=""></style>

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
        <label>description</label><textarea type="text" v-model="product.description" ></textarea>
      </div>
      <div>
      <button type="submit">Valider</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "form-component",
  data() {
    return {
      product: {
        title: "",
        price: 0,
        description : ''
      },
    };
  },
  methods: {
      submitForm() {
          this.$emit('add-product', {...this.$data.product})
          console.log(this.$data.product)
      }
  },
};
</script>
<style lang=""></style>

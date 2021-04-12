<template lang="">
    <!--<div v-if="product != undefined">
        Product {{product.title}} {{product.price}}
        
    </div>
    <div v-else>
        Aucun produit
    </div>-->
    <h1>{{product.title}} {{product.price}}€</h1>
    <slot :product="product" name="description"></slot>
</template>
<script>
export default {
  props: {
      product : Object
  },
//   beforeCreate() {
//       console.log('le composant va être créer')
//   },
//   created() {
//       console.log('le composant a été crée')      
//   },
  name : 'product',
  mounted() {
      this.$emit('get-data', "data sended to parent")
  }
}
</script>
<style lang="">
    
</style>
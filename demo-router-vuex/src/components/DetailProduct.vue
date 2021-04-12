<template lang="">
    <div>
        <h1>Detail Product</h1>
        <div v-if="product != undefined">
            {{product.title}} {{product.price}}
        </div>
        <ul>
        <router-link to="/detail/accessoire">Accessoires</router-link>
      </ul>
    </div>
    <router-view/>
</template>
<script>
import {getProduct} from "./../service/ApiService"
export default {
    name : 'detail-product',
    data() {
        return {
            product : undefined
        }
    },
    mounted() {
        this.product = getProduct(this.$route.params.id)
    },
}
</script>
<style lang="">
    
</style>
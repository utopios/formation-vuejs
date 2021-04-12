<template lang="">
    <div>
        <h1>Liste products</h1>
        <div  v-for="product in products" @click="goToDetail(product.id)" :key="product">
            {{product.title}}
        </div>
    </div>
</template>
<script>
import {getProducts} from "./../service/ApiService"
export default {
    name : 'list-products',
    data() {
        return {
            products : getProducts()
        }
    },
    methods: {
        goToDetail(id) {
            this.$router.push('/detail/'+id)
        }
    },
}
</script>
<style lang="">
    
</style>
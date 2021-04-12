<template lang="">
    <div>
        <FormProduct/>
        <input type="text" placeholder="recherche" v-model="search">
        <h1>Liste products</h1>
        <div  v-for="product in products" @click="goToDetail(product.id)" :key="product">
            {{product.title}}
        </div>
    </div>
</template>
<script>
import FormProduct from "./FormProduct.vue"
export default {
    name : 'list-products',
    data() {
        return {
            //products : this.$store.state.products,
            search : undefined
        }
    },
    computed: {
        products() {
            return (this.$data.search==undefined) ? this.$store.state.products : this.$store.getters.filterByTitle(this.$data.search)
        }
    },
    mounted() {
        console.log(this.$store)
    },
    methods: {
        goToDetail(id) {
            this.$router.push('/detail/'+id)
        }
    },
    components:{
        FormProduct
    }
}
</script>
<style lang="">
    
</style>
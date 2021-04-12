import {createRouter, createWebHistory} from "vue-router"
import ListProducts from "./../components/ListProducts.vue"
import DetailProduct from "./../components/DetailProduct.vue"
import Accessoires from "./../components/Accessoires.vue"
import {isLogged} from "./../service/ApiService"
const routes = [
    {
        path : '/',
        name : 'Home',
        component : ListProducts,
        
    },
    {
        path : '/detail/:id',
        name : 'Detail',
        component : DetailProduct,
        beforeEnter (to, from, next) {
            
            if(to != "Home" && !isLogged) {
                next({name : 'Home'})
            }
            else {
                next()
            }
        },
        children : [
            {
                path : 'accessoire',
                name : 'accessoire',
                component : Accessoires
            }
        ]
    },
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router
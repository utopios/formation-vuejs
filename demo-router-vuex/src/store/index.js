import {createStore} from "vuex"
import {getProducts,addProductApi} from "./../service/ApiService"

const store = createStore({
    state:{
        products : [...getProducts()]
    },

    mutations : {
        addProduct(state,product) {
            state.products.push(product)
            // addProductApi(product).then(res => {
            //     state.products.push(res)
            // }) <=>
            //ça marche mais contre indiquer ou mauvaise pratique
        }
    },
    getters: {
        filterByTitle : (state) => (search) => {
            return state.products.filter(e=>e.title.includes(search))
        }
    },
    actions : {
        actionAddProduct(context, product) {
            addProductApi(product).then(res => {
                context.commit('addProduct', res)
            })
        }
    }
})

export default store
export const isLogged = true;

const products = [
    {id : 1, title : 'product 1', price : 20},
    {id : 2, title : 'product 2', price : 10},
    {id : 3, title : 'product 3', price : 30},
    {id : 4, title : 'product 4', price : 40},
]

export const getProducts = () => {
    return products
}

export const getProduct = (id) => {
    return products.find(e => e.id == id)
}


export const addProductApi = (product) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            product.id = products.length + 1
            products.push(product)
            resolve(product)
        }, 3000)
    }) 
}
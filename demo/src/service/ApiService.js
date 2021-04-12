const products = [
    {title : 'product 1', price : 10},
    {title : 'product 2', price : 20},
    {title : 'product 3', price : 30},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
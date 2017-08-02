import * as ActionTypes from "./ActionTypes";
import * as productService from "./ServiceAPI";

export function getProducts(){
    return function(dispatch){
        productService.fetchProducts()
        .then(products => {
            dispatch(
                {
                    type: ActionTypes.INIT_PRODUCTS,
                    products: products
                }
            )
        })
    }
}



export function loading(status) {
    return {
        type: ActionTypes.LOADING,
        loading: status
    }
} 

//returns a function, that shall be executed by thunk
export function getProduct(id) {
    return function(dispatch) {
        console.log("Called by thunk ", id,  dispatch);

        productService.fetchProduct(id)
        .then ( (product) => {
            dispatch( {
                type: ActionTypes.EDIT_PRODUCT,
                product: product
            })
        })
    }
}

export function getBrands() {
    return function(dispatch) {
        console.log("Called by thunk ",  dispatch);

        productService.fetchBrands()
        .then ( (brands) => {
            dispatch( {
                type: ActionTypes.INIT_BRANDS,
                brands: brands
            })
        })
    }
}

export function updateProduct(product) {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        product: product
    }
}

export function saveProduct(product) {
    return function(dispatch) {
        productService.saveProduct(product)
        .then ( () => {
            alert("product saved successfully")
        })
    }
}
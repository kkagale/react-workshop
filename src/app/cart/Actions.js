
import * as ActionTypes from "./ActionTypes";

export function addItemToCart(product) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        item: {
            name: product.name,
            id: product.id,
            price: product.price
        }
    }
}

export function removeItemFromCart(id) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        id: id
    }
}


export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}
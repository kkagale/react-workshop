import * as ActionTypes from "./ActionTypes";
const INITIAL_STATE = []

export default function 
            cartReducer(state = INITIAL_STATE,
                                    action) {

    console.log("cartReducer ", state, action);
    
    switch(action.type) {
        case ActionTypes.ADD_ITEM_TO_CART:
            return [...state, action.item]

        case ActionTypes.REMOVE_ITEM_FROM_CART: 
            return state.filter (item => item.id != action.id)

        case ActionTypes.EMPTY_CART: 
            return []
        
        default:
            return state;
    }

}
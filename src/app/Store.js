import {createStore, 
       combineReducers, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import cartReducer from "./cart/Reducer";
//reducers are functions
//accepts and return output value

const INITIAL_STATE = 0;

function counterReducer(state=INITIAL_STATE,
                         action) {
        console.log("counterReducer", state, action);

        switch(action.type) {
            case "INCREMENT":
                return state + action.value;
            
            case "DECREMENT":
                return state - action.value;

            default:
                return state;
        }
}

import productReducer from "./product/Reducer";

let rootReducer = combineReducers({
    counter: counterReducer,
    cartState: cartReducer,
    productState: productReducer

})

//persistent
let storage = window.localStorage;

// sessionStorage - each tab has its own storage - in new tabe it will not work
// let storage = window.sessionStorage;


function cartMiddleware(store) {

    return function(next) {
        return function(action) {
            console.log(" cartMiddleware", action);
            // forward action to next middleware
            // forward to reducer
            var result = next(action)
            //reducer excuted
            let state = store.getState();
            if(action.type.indexOf("CART") >= 0){
                storage.setItem("carts", JSON.stringify(state.cartState))
            }
            return result;
        }
    }
}

let cartItems = [];

if(storage.carts){
    var data = storage.getItem("carts");
    cartItems = JSON.parse(data);
}


//store shall maintain state/value returned by reducers
let store = createStore(rootReducer, 
                        {
                            cartState: cartItems
                        },
                      applyMiddleware(thunk, cartMiddleware))


store.subscribe( ()=> {
    console.log("SUB ", store.getState());
});


//action creator helpers
function createIncrementAction(value) {
    return {
        type: 'INCREMENT',
        value: value
    }
}

function asyncActionCreator() {
    return function(dispatch) {
            console.log("***called by thunk")

            dispatch(createIncrementAction(10000));
    }
}

let actionFunc = asyncActionCreator();

store.dispatch(actionFunc);

export default store;



//IGNORE BELOW CODE
//dispatch an action
let action = {
    type: 'INCREMENT',
    value: 10
}

//store internally calls reducer
//reducers give return value
//store keep the latest value
store.dispatch(action)

//get state returns last knwon value from store
console.log("Result ", store.getState() );

action = {
    type: 'DECREMENT',
    value: 5
}

store.dispatch(action);
console.log("Result ", store.getState() );

let unknown = {
    type: 'XYZ',
    test: 'hello'
}

store.dispatch(unknown);
console.log("Result ", store.getState() );



action = {
    type: 'DECREMENT',
    value: 2
}




action = createIncrementAction(4);

store.dispatch(action);
console.log("Result ", store.getState() );

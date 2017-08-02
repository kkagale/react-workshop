import {connect} from "react-redux";

import Counter from "./Counter";

import {bindActionCreators} from "redux";

//mapping
//state is result of store.getState()
let mapReduxStateToReactProps = function(state) {
    //return props to component
    return {
        counter: state.counter
    }
}

function incrementAction(value) {
    return {
        type: 'INCREMENT',
        value: value
    }
}

let mapReduxDispatchToReactProps = function(dispatch) {
    //props for component
    return {
        // increment: function(value) {
        //                 dispatch(incrementAction(value));
        //             }

        increment: bindActionCreators(incrementAction, dispatch)
    }
}

let connectFn = connect(mapReduxStateToReactProps, 
                        mapReduxDispatchToReactProps)

//decorated component -- AOP
//handle subscribe, unsubscribe
//convert state to props
//convert dispatch to props
let CounterContainerComponent = connectFn(Counter);

export default CounterContainerComponent;
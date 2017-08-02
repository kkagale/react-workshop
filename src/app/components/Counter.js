
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.handle = setInterval( ()=> {
            //increment is passed from container component
                this.props.increment(2);
        }, 2000);
    }
    
    render() {
        return (
            <div> 
            <h2>Counter - {this.props.counter}</h2>
            </div>
        )
    }
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    counter: PropTypes.number
}
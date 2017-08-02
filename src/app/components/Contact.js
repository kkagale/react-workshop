import React from "react";

import PropTypes from "prop-types";

export default class Contact extends React.Component{

    render(){
        return (
            <div>
                <h2>Contact</h2>
                <Address/>
            </div>
        )
    }
}

export class Address extends React.Component{

    render(){
        return (
            <div>
                <h2>Address</h2>
                <span>City: {this.context.address.city} </span><br/>
                <span>State: {this.context.address.state} </span> <br/>
                <span>Color: {this.context.color} </span> <br/>
            </div>
        )
    }
}

Address.contextTypes = {
    address: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string
    }),
    color: PropTypes.string
}

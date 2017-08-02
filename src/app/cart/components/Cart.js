
import React from "react";
import PropTypes from "prop-types";

export default function Cart(props) { 
       let list = props.items
                 .map( item => (
                     <li>
                        {item.name}
                     </li>
                 ) );

        return (
            <div> 

            <button onClick={ () => props.actions.emptyCart() }>
                Empty
            </button>

            <h2>Cart</h2>

            <ul>
                {list}
            </ul>
            </div>
        )
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}
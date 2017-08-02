
import React, {Component} from "react";
import PropTypes from "prop-types";

import * as serviceApi from "../ServiceAPI";

import {Link} from "react-router-dom";

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        // serviceApi.fetchProducts()
        // .then ( products => {
        //     this.setState({
        //         products:products
        //     })
        // })
       
        this.props.actions.getProducts()
       
    }

    addToCart(product){
        this.props.cartActions.addItemToCart(product);
    }
    
    render() {

        let rows = this.props.products.
            map ( product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.year}</td>
                        <td>{product.price}</td>
                        <td> <button onClick={()=> this.addToCart(product)}> 
                             +Cart
                             </button>    
                        </td>

                        <td>
                            <Link to={`/products/edit/${product.id}`} 
                                   className="button"> 
                             Edit
                             </Link>       
                        </td>


                        <td> <button> 
                             Delete
                             </button>    
                        </td>
                        
                         

                    </tr>
            ))

        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>+Cart</th>
                     <th>Edit</th>
                     <th>Delete</th>
                </tr>

                {rows}

                </tbody>

            </table>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}
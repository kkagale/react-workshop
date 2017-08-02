import React from "react";

import {NavLink} from "react-router-dom";

export class Header extends React.Component{
    //Step 1: Constructor
    // called only one time
    constructor(props){
        super(props);
        console.log("Header created");
    }

    //Step2:
    // Real Dom/View is not ready
    // called only one time

    componentWillMount(){
        console.log("componentWillMount called");

    }

    // Step3:
    // return view
    // returns virtual dom
    // Called multiple times
    render(){
        console.log("Render called");

        return (
            <div>
                <h2>{this.props.title}</h2>

                <div>
                    <NavLink to="/" exact className="button" activeClassName="success"> Home </NavLink>
                    <NavLink to="/products" className="button" activeClassName="success"> Products </NavLink>
                    <NavLink to="/carts" className="button" activeClassName="success"> Carts </NavLink>

                    <NavLink to="/about" className="button" activeClassName="success"> About </NavLink>
                    <NavLink to="/counter" className="button" activeClassName="success"> Counter </NavLink>

                    <NavLink to="/contact" className="button" activeClassName="success"> Contact </NavLink>
                </div>
            </div>
        )
    }

    //Step4:
    // Real dom ready
    // the rendered view displayed on actula dom
    // View ready
    // called only one time
    componentDidMount(){
        console.log("componentDidMount called");
    }

    

}

Header.defaultProps = {
        title: 'My Header'
    }
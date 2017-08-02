import React from "react";

import {Header} from "./components/Header";

import {Footer} from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact, {Address} from "./components/Contact";

import PropTypes from "prop-types";

export class App extends React.Component{

    parentHandler(){
        alert('Called by child');
    }

    getChildContext(){
        return {
            address: {
                city: 'Pune',
                state: 'MH'
            },
            color:'red'
        }
    }

    render(){
        return (
            <div>
                <h2> React App </h2>

                <Header title="Product App" >
                </Header>
                <div>
                    {this.props.children}
                </div>
                <Footer year={2017} company="Deutsche Bank" handler={this.parentHandler}>
                </Footer>
            </div>
        )
    }
}

App.childContextTypes = {
    address: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string
    }),
    color: PropTypes.string
}
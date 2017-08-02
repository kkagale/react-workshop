import {BrowserRouter as Router, 
        Route, 
        Switch} from "react-router-dom";

import React from "react";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import {App} from "./App";

import NotFound from "./components/NotFound";

import ProductRoutes from "./product/Routes";

import Counter from "./components/CounterContainer";

import Cart from "./cart/container/Cart";

export default function Routes(props){
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/counter" component={Counter} />

                    <Route path="/contact" component={Contact} />
                    <Route path="/products">
                        {ProductRoutes}
                    </Route >
                    <Route path="/carts" component={Cart}>
                    </Route >

                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
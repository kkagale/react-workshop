//bootstrap file
// bind react andreal DOM

import React from "react";
import {render} from "react-dom";

// polyfills fetch api
import "whatwg-fetch"

import store from "./app/Store";
import {Provider} from "react-redux";
// import {App} from "./app/App";
import Routes from "./app/Routes";

// mount a react component into browser
// virtual dom into real dom
render(
  //  <App> </App>,
    <Provider store={store}>
        <Routes>
        </Routes>
    </Provider>,
    document.getElementById("root")
 )
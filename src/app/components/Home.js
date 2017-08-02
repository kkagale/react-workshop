import React from "react";

//BAD WAY
import store from "../Store";

export default class Home 
        extends React.PureComponent {

    constructor(props) {
        super(props);

         
    }

    componentDidMount() {
        this.handle = setInterval( ()=> {
             store.dispatch({
                 type: 'INCREMENT',
                 value: 1
             })
        }, 2000);


        this.unsubscribeFn = store.subscribe( ()=> {
            console.log("SUBS CALLED");
            this.forceUpdate();
        })
    }
 
    
    render() {
        console.log(" render likes value ", store.getState().counter)
        return (
            <div>
                <h2>Home</h2>

                

                <h2> Likes: {store.getState().counter}</h2>
            </div>
        )
    }

    componentWillUnmount( ) {
        clearInterval(this.handle);

        this.unsubscribeFn();
    }
}
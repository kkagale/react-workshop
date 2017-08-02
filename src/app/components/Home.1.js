import React from "react";


//BAD Way
import store from "../Store";

export default class Home extends React.PureComponent{

    constructor(props){
        super(props);

        this.state = {
            likes:0
        }
        this.counter = 0;
    }

    componentDidMount(){
        this.handle = setInterval(() => {
                this.counter++;
                let roundValue = Math.ceil(this.counter / 10);
                console.log("value::", roundValue);
                this.setState({
                    likes:roundValue
                })
            }, 2000
        );
    }

    componentWillUnmount(){
        console.log("Unmount")
        clearInterval(this.handle);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState, this.state);
    //     return this.state.likes != nextState.likes;
    // }

    render(){
        console.log("Render like value::", this.state.likes)
        return (
            <div>
                <h2>Home</h2>
                <h2> Likes: {this.state.likes} </h2>
            </div>
        )
    }
}
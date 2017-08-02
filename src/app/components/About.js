import React from "react";
import Contact from "./Contact";

export default class About extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            members: ['Member 1', 'Member 2',  'Member 2'],
            show: true,
            name: "Enter value"
        }
    }

    render(){
        let list = this.state.members
                    .map((m,i) => <li key={i}> {m} </li>);
        console.log("render is called")
        return (
            <div>
                <h2>About</h2>
                <button onClick={(e) => this.toggle(e)}>
                    {this.state.show ? "Hide" : "Show"}
                </button>

                <input name="name" value={this.state.name} 
                    onChange={(e) => this.onChange(e)}
                    ref={(domElement) => this.inputElement = domElement} />
                <button onClick={() => this.addMember()}>
                    Add
                </button>

                {/* conditional rendering */}
                
                {this.state.show && <ul>
                    {list}
                </ul>}

                <Contact/>
            </div>
        )
    }

    toggle(e){
        this.setState({show: !this.state.show})
        console.log("toggle called ", e)
    }

    onChange(e){
        this.setState({
             name: e.target.value
        })
    }

    addMember(){
        // bad way
        // mutation of state
        //this.state.members.push(this.inputElement.value);
        // force update
        //this.forceUpdate();

        this.setState(
            {
                members: [...this.state.members, this.state.name]
            }
        );
    }

    componentDidMount(){
        //this.inputElement.focus();
        //this.inputElement.value = "Enter member"
    }
}
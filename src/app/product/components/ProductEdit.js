
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductEdit extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let id = this.props.match.params["id"];
        console.log(id);
        console.log(this.props.match.url, this.props.match.path);
        if(id){
            this.props.actions.getProduct(id);
        }else{
            // create
        }
        this.props.actions.getBrands();
    }

    // 
    gotoUrl(){
        //
        this.props.history.push("/products/list");
    }

    saveProduct(e){
        // we need to prevent a from submit default
        e.preventDefault();
        this.props.actions.saveProduct(this.props.product);
    }

    onValueChange(e){
        let {name, value} = e.target;
        this.props.actions.updateProduct(Object.assign({}, this.props.product, {[name]: value}))
    }
    
    
    render() {

    let options = this.props.brands.map ( brand => (
        <option value={brand.id} key={brand.id}>
            {brand.name}
        </option>
    ));

    
    return (
            <div> 
            <button onClick={()=> this.gotoUrl()}>
                Got to Url
            </button>
            <h2>Product Edit - {this.props.product.name}</h2>
           
            <form onSubmit={ (e)=> this.saveProduct(e)}  >
                <input name="name" 
                        value={this.props.product.name} 
                        onChange={(e)=>this.onValueChange(e)}/>
            
                <input name="year" 
                        value={this.props.product.year} 
                        onChange={(e)=>this.onValueChange(e)}/>
            
                <select name="brandId"
                        onChange={(e)=>this.onValueChange(e)}
                        value={this.props.product.brandId}
                    >
                    {options}
                </select>

            <button type="submit">Save</button>
         </form>
           
           
           
            </div>
        )
    }
} 


ProductEdit.defaultProps = {
    
}

ProductEdit.propTypes = {
    
}

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../Actions";
import * as cartActions from "../../cart/Actions";

const mapStateToProps = (state) => {
    return {
         products: state.productState.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)
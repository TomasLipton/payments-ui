import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cart';
import Checkout from "../../components/Checkout/Checkout";
import uniqBy from "lodash/uniqBy";

const formatItems = cart => {
    const items = uniqBy(cart.items, o => o.id);

    return items.map((element, index, items) => {
            return {
                ...element,
                count: cart.items.reduce(
                    (count, product) => {
                        return count + (product.id === element.id ? 1 : 0)
                    }
                    , 0
                )
            };
        }
    );
};

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items.reduce((total, product) => total + product.price, 0),
    cartItems: formatItems(cart),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkout);

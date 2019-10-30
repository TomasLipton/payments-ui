import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import uniqBy from 'lodash/uniqBy';
import MenuComponent from "../components/Menu/Menu";

const formatItems = (cart, books) => {
    const items = uniqBy(cart.items, o => o.id);

    return items.map((element, index, items) => {
            return {
                ...element,
                count: cart.items.reduce(
                    (count, book) => {
                        return count + (book.id === element.id ? 1 : 0)
                    }
                    , 0
                )
            };
        }
    );
};

const mapStateToProps = ({cart, books}) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    items: formatItems(cart, books),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuComponent);
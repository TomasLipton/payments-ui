import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import uniqBy from 'lodash/uniqBy';
import MenuComponent from "../components/Menu/Menu";

const formatItems = (cart, books) => {
    let items;

    items = uniqBy(cart.items, o => o.id);

    console.log(items)

    // console.log(items.map((i, index, items) => {
    //     return {
    //         ...items,
    //         test: 123
    //     }
    //
    //         books.items.reduce(
    //             (count, book) =>
    //             , 0
    //         )
    //     }
    // ));

    return items;
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
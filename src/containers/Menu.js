import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import uniqBy from 'lodash/uniqBy';
import MenuComponent from "../components/Menu/Menu";

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
});
console.log(cartActions);
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuComponent);
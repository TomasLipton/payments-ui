import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import BookCard from "../components/BookCard/BookCard";
import Checkout from "../components/Checkout/Checkout";

const mapStateToProps = ({cart}, {id}) => ({
    addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Checkout);
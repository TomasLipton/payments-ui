import * as productsActions from "../actions/products";
import {connect} from "react-redux";
import App from "../components/App";
import {bindActionCreators} from "redux";
import orderBy from "lodash/orderBy";

const sortBy = (products, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(products, 'attributes.price', 'desc');
        case 'price_low':
            return orderBy(products, 'attributes.price', 'asc');
        case 'author':
            return orderBy(products, 'attributes.title', 'asc');
        default:
            return products;
    }
};

const filterProducts = (products, searchQuery) => {
    return products.filter(
        (o) =>
            o.attributes.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            (o.attributes.about && o.attributes.about.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0),
    )
}


const searchProducts = (products, filterBy, searchQuery) => {
    return sortBy(filterProducts(products, searchQuery), filterBy);
};


const mapStateToProps = ({products, filter}) => {
    return {
        products: products.items && searchProducts(products.items, filter.filterBy, filter.searchQuery),
        isReady: products.isReady
    }
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(productsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

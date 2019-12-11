import * as booksActions from "../actions/books";
import {connect} from "react-redux";
import App from "../components/App";
import {bindActionCreators} from "redux";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
    console.log(books, filterBy)
    switch (filterBy) {
        case 'price_high':
            return orderBy(books, 'attributes.price', 'desc');
        case 'price_low':
            return orderBy(books, 'attributes.price', 'asc');
        case 'author':
            return orderBy(books, 'attributes.title', 'asc');
        default:
            return books;
    }
};

const filterBooks = (books, searchQuery) => {
    return books.filter(
        (o) =>
            o.attributes.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            (o.attributes.about && o.attributes.about.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0),
    )
}


const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
};


const mapStateToProps = ({books, filter}) => {
    return {
        books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
        isReady: books.isReady
    }
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

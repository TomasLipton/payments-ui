import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setBooks} from "../actions/books";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Container} from 'semantic-ui-react'
import MenuComponent from "./Menu/Menu";
import BookCard from "./BookCard/BookCard";

import '../app.css'
import Filter from "./Filter/Filter";

class App extends Component {
    componentDidMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        })
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container>
                <MenuComponent/>
                <Filter />
                <Card.Group itemsPerRow={4}>
                    {
                        !isReady
                            ? 'loading....'
                            : books.map(book => (
                                <BookCard {...book} />
                            ))
                    }
                </Card.Group>
            </Container>
        );
    }
}

export default App;

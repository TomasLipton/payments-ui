import React, {Component} from 'react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Container} from 'semantic-ui-react'

import '../app.css'
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import BookCard from "../containers/BookCard";

class App extends Component {
    componentDidMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        })
    }

    render() {
        const {books, isReady, setFilter} = this.props;
        return (
            <Container>
                <Menu/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {
                        !isReady
                            ? 'loading....'
                            : books.map(book => (
                                <BookCard key={book.id} {...book} />
                            ))
                    }
                </Card.Group>
            </Container>
        );
    }
}

export default App;

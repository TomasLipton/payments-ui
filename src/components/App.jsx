import React, {Component} from 'react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Container, Header} from 'semantic-ui-react'

import './app.css'
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import BookCard from "../containers/BookCard";

class App extends Component {
    componentDidMount() {
        const {setBooks} = this.props;
        axios.get('https://api.psychoanalitik.by/api/v1/products').then(({data}) => {
            setBooks(data);
        })
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container>
                <Menu/>
                <Filter/>
                <Header as='h2' dividing>
                    Услуги
                </Header>
                <Card.Group doubling itemsPerRow={4}>
                    {
                        !isReady
                            ? 'loading....'
                            : books.map(book => {
                                if (book.attributes.category === 'psy') {
                                    return <BookCard key={book.id} {...book.attributes} />;
                                } else {
                                    return [];
                                }
                            })
                    }
                </Card.Group>
                <Header as='h2' dividing>
                    Обучение
                </Header>
                <Card.Group doubling itemsPerRow={4}>
                    {
                        !isReady
                            ? 'loading....'
                            : books.map(book => {
                                if (book.attributes.category !== 'psy') {
                                    return <BookCard key={book.id} {...book.attributes} />;
                                } else {
                                    return [];
                                }
                            })
                    }
                </Card.Group>
            </Container>
        );
    }
}

export default App;

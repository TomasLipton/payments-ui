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
        axios.get(process.env.REACT_APP_API_ROOT + 'products').then(({data}) => {
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
                                return <BookCard key={book.id} {...book.attributes} />;
                            })
                    }
                </Card.Group>
            </Container>
        );
    }
}

export default App;

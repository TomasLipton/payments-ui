import React, {Component} from 'react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import {Card, Container, Header} from 'semantic-ui-react'

import './app.css'
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import ProductCard from "../containers/ProductCard";

class App extends Component {
    componentDidMount() {
        const {setProducts} = this.props;
        axios.get(process.env.REACT_APP_API_ROOT + 'products').then(({data}) => {
            setProducts(data);
        })
    }

    render() {
        const {products, isReady} = this.props;
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
                            : products.map(product => {
                                return <ProductCard key={product.id} {...product.attributes} />;
                            })
                    }
                </Card.Group>
            </Container>
        );
    }
}

export default App;

import React from 'react';
import {Container, Header, Table, Input, Button, Icon, Segment, List} from "semantic-ui-react";
import Menu from "../../containers/Menu";
import Filter from "../../containers/Filter";

const Checkout = ({cartItems, removeFromCart}) => {

    const cartItem = cartItems.map(({id, title, price, count}, index) => {

        const setHours = (event) => {
            console.log(event.target.value)
        };

        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h2' textAlign='center'>
                        {index+1}
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>{title}</Table.Cell>
                <Table.Cell>
                    {price}
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    <Input
                        label={{basic: true, content: 'час'}}
                        value={count}
                        labelPosition='right'
                        placeholder='Enter weight...'
                        onClick={setHours}
                    />
                </Table.Cell>
                <Table.Cell>
                    {count * price}
                </Table.Cell>
                <Table.Cell>
                    <Button onClick={removeFromCart.bind(this, id)} icon color="red">
                        <Icon name={'cancel'}/>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    });

    const TableSummary = () => {
        return (
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>#</Table.HeaderCell>
                        <Table.HeaderCell>Название</Table.HeaderCell>
                        <Table.HeaderCell>Стоимость часа</Table.HeaderCell>
                        <Table.HeaderCell>Количестово часов</Table.HeaderCell>
                        <Table.HeaderCell>Стоимость</Table.HeaderCell>
                        <Table.HeaderCell>Удалить</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {cartItem}
                <Table.Body>
                </Table.Body>
            </Table>
        );
    }

    const emptyCart = <Segment placeholder>
        <Header icon>
            <Icon name='tasks'/>
            Карзина пуста. Добавьте товары к оплате
        </Header>
    </Segment>;

    return (
        <Container>
            <Menu/>
            <Filter/>
            {
                cartItem.length > 0
                    ? <TableSummary/>
                    : emptyCart
            }
        </Container>
    )
};

export default Checkout;
import {Button, Header, Icon, Input, Table} from "semantic-ui-react";
import React from "react";
import {bindActionCreators} from "redux";
import * as cartActions from "../../../actions/cart";
import {connect} from "react-redux";
import uniqBy from "lodash/uniqBy";


const TableSummary = ({cartItems, removeFromCart}) => {
    const cartItem = cartItems.map(({id, title, price, count}, index) => {
        const setHours = (event) => {
            console.log(event.target.value)
        };

        return (
            <Table.Row key={id}>
                <Table.Cell>
                    <Header as='h2' textAlign='center'>
                        {index + 1}
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>{title}</Table.Cell>
                <Table.Cell>
                    {price}
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    {count}
                    {/*<Input*/}
                    {/*    label={{basic: true, content: 'час'}}*/}
                    {/*    value={count}*/}
                    {/*    labelPosition='right'*/}
                    {/*    placeholder='Enter weight...'*/}
                    {/*    onClick={setHours}*/}
                    {/*/>*/}
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

    return (<Table celled padded>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell singleLine>#</Table.HeaderCell>
                <Table.HeaderCell>Название</Table.HeaderCell>
                <Table.HeaderCell>Стоимость </Table.HeaderCell>
                <Table.HeaderCell>Количестово </Table.HeaderCell>
                <Table.HeaderCell>Стоимость всего</Table.HeaderCell>
                <Table.HeaderCell>Удалить</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {cartItem}
        </Table.Body>
    </Table>)
}

const formatItems = cart => {
    const items = uniqBy(cart.items, o => o.id);

    return items.map((element, index, items) => {
            return {
                ...element,
                count: cart.items.reduce(
                    (count, product) => {
                        return count + (product.id === element.id ? 1 : 0)
                    }
                    , 0
                )
            };
        }
    );
};

const mapStateToProps = ({cart}) => ({
    cartItems: formatItems(cart),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TableSummary);

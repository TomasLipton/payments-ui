import React from 'react';
import {Button, Image, List} from 'semantic-ui-react';

const Cart = ({title, id, picture, removeFromCart}) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this, id)} color="red">
                    Удалить
                </Button>
            </List.Content>
            <Image avatar src={picture}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

export default Cart;
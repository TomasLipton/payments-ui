import React from 'react';
import {Button, Image, Label, List} from 'semantic-ui-react';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

const Cart = ({title, id, picture, removeFromCart, count, price}) => (
    <List.Item>
        <List.Content floated="right">
            <Button onClick={removeFromCart.bind(this, id)} icon color="red">
                <Icon name={'cancel'}/>
            </Button>
        </List.Content>
        <Image avatar src={picture}/>
        <List.Content>
            <List.Header>{title}</List.Header>
            <Label size={'small'}>
                Часов:
                <Label.Detail>{count}</Label.Detail>
            </Label>
            <Label size={'small'}>
                BYN:
                <Label.Detail>{count * price}</Label.Detail>
            </Label>
        </List.Content>
    </List.Item>
);

export default Cart;

import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button, Image, List, Menu, Popup} from 'semantic-ui-react'

const CartComponent = ({ title, id, image, removeFromCart }) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this, id)} color="red">
                    Удалить
                </Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = (prop) => {
    const { totalPrice, count, items } = prop;
    return (
            <Menu>
        <Menu.Item name="browse">Магазин книг</Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item name="signup">
                Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item name="help">
                        Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(book => (
                    <CartComponent {...book}  removeFromCart={prop.removeFromCart} />
                ))}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
    );
};
export default MenuComponent;

import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Header, Icon, List, Menu, Popup, Segment} from 'semantic-ui-react'
import Cart from "../Cart/Cart";

const MenuComponent = (prop) => {
    const {totalPrice, count, items} = prop;

    const renderItems =
        items.map(book => (
            <Cart key={book.id} {...book} removeFromCart={prop.removeFromCart}/>
        ));

    return (
        <Menu stackable>
            <Menu.Item name="browse">Магазин книг</Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item name="signup">
                    Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
                </Menu.Item>

                <Popup
                    wide
                    position="bottom right"
                    trigger={
                        <Menu.Item name="help">
                            Корзина (<b>{count}</b>)
                        </Menu.Item>
                    }
                    content={
                        renderItems.length
                            ? <List divided verticalAlign='middle'>
                                {renderItems}
                            </List>
                            : <Segment placeholder>
                                <Header icon>
                                    <Icon name='tasks'/>
                                    Карзина пуста. Добавьте товары к оплате
                                </Header>
                            </Segment>
                    }
                    on="click"
                />
            </Menu.Menu>
        </Menu>
    );
};
export default MenuComponent;

import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button, Header, Icon, List, Menu, Popup, Segment} from 'semantic-ui-react'
import Cart from "../Cart/Cart";
import {Link} from "react-router-dom";

const MenuComponent = ({totalPrice, count, cartItems, removeFromCart}) => {

    const renderItems = cartItems.map(product => (
        <Cart key={product.id} {...product} removeFromCart={removeFromCart}/>
    ));

    return (
        <Menu stackable>
            <Menu.Item name="browse" as={Link} to={'/'}>Оплата услуг</Menu.Item>

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
                            ? <React.Fragment>
                                <List divided verticalAlign='middle'>
                                    {renderItems}
                                </List>
                                <Button fluid as={Link} to='/checkout'>Продолжить <Icon name={'angle double right'}/></Button>
                            </React.Fragment>
                            : <Segment placeholder>
                                <Header icon>
                                    <Icon name='tasks'/>
                                    Корзина пуста. Добавьте товары к оплате
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

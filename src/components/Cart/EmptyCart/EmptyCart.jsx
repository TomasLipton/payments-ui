import {Header, Icon, Segment} from "semantic-ui-react";
import React from "react";

const EmptyCart = () => <Segment placeholder>
    <Header icon>
        <Icon name='tasks'/>
        Корзина пуста. Добавьте товары к оплате
    </Header>
</Segment>;

export default EmptyCart;

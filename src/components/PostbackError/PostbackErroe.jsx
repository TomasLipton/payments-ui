import React from 'react';
import {Button, Container, Header, Icon, Segment} from "semantic-ui-react";

const PostbackError = (prop) => {
    const url = new URL(window.location.href);
    const ordernumber = url.searchParams.get("ordernumber");
    const billnumber = url.searchParams.get("billnumber");

    fetch(process.env.REACT_APP_API_ROOT + 'orders/' + ordernumber, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "ordernumber": ordernumber,
            "billnumber": billnumber,
            "status": 'canceled'
        })
    }).then(r => {
    });

    return (
        <Container>
            <Segment placeholder>
                <Header icon>
                    <Icon name='thumbs down outline' color={'red'}/>
                   При попытке оплаты произошла ошибка. Попробуйте еще раз!
                </Header>
                <Segment.Inline>
                    <Button primary as={'a'} href={'/'}>К списку товаров</Button>
                </Segment.Inline>
            </Segment>
        </Container>
    );
};
export default PostbackError;

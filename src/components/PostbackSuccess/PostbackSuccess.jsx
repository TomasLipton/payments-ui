import React from 'react';
import {Button, Container, Header, Icon, Segment} from "semantic-ui-react";
import Menu from "../../containers/Menu";

const PostbackSuccess = (prop) => {

    const url = new URL(window.location.href);
    const ordernumber = url.searchParams.get("ordernumber");
    const billnumber = url.searchParams.get("billnumber");

    fetch(process.env.REACT_APP_API_ROOT + 'assist/return-success/' + ordernumber, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "ordernumber": ordernumber,
            "billnumber": billnumber,
            "status": 'confirmed'
        })
    }).then(r => {
    });

    return (
        <Container>
            <Menu/>
            <Segment placeholder>
                <Header icon>
                    <Icon name='chevron down' color='green'/>
                    Платеж удачно принят.
                </Header>
                <Segment.Inline>
                    <Button primary as={'a'} href={'/'}>Совершеть другую покупку</Button>
                </Segment.Inline>
            </Segment>
        </Container>
    );
};
export default PostbackSuccess;

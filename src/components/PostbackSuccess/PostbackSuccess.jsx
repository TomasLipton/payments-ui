import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button, Container, Header, Icon, Segment} from "semantic-ui-react";

const PostbackSuccess = (prop) => {


    return (
        <Container>
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

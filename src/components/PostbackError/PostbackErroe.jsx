import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Button, Container, Header, Icon, Segment} from "semantic-ui-react";

const PostbackError = (prop) => {
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

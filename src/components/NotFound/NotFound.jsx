import React from 'react';
import {Button, Container, Header, Icon, Segment} from "semantic-ui-react";


const NotFound = (prop) => <Container>
    <Segment placeholder>
        <Header icon>
            <Icon name='search'/>
            We don't have any documents matching your query.
        </Header>
        <Segment.Inline>
            <Button primary as={'a'} href={'/'}>Go home</Button>
        </Segment.Inline>
    </Segment>
</Container>;

export default NotFound;
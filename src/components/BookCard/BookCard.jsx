import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

const BookCard = ({title, author, price, image}) => (
    <Card>
        <Image src={image} wrapped ui={false}/>
        <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
               {title}
            </Card.Meta>
            <Card.Description>
                {author}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
              {price}
            </a>
        </Card.Content>
    </Card>
)

export default BookCard
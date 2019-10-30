import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookCard = book => {
    const { title, author, price, picture, addToCart, addedCount } = book;
    return (
        <Card>
            <div className="card-image">
                <Image rounded src={picture} />
            </div>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <span>
                    <Icon name="rub" />
                    {price}
                </span>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)}>
                Добавить в корзину {addedCount > 0 && `(${addedCount})`}
            </Button>
        </Card>
    );
};

export default BookCard;
import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
import {declOfNum} from "../../helpers";

const ProductCard = props => {
    const {title, author, price, picture, addToCart, addedCount} = props;
    return (
        <Card>
            <div className="card-image">
                <Image rounded src={picture}/>
            </div>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <span>
                    <Icon name="rub"/>
                    {price}
                </span>
            </Card.Content>
            <Button onClick={addToCart.bind(this, props)}>{
                addedCount > 0
                    ? `${declOfNum(addedCount, ['Добавлен', 'Добавлено', 'Добавлено'])} ${addedCount} ${declOfNum(addedCount, ['час', 'часа', 'часов'])}`
                    : "Добавить в корзину"
            }
            </Button>
        </Card>
    );
};

export default ProductCard;

import React, { Component } from 'react';
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react';
import { products } from '../pages/calculate';

class Product extends Component {
    render() {
        const item = this.props.items;
        return (
            <Card>
                <Card.Content>
                    <Label as='a' color='teal' ribbon='right' style={{ visibility: (products[item].coupon !== '' ? 'visible' : 'hidden') }}>
                        {products[item].coupon}
                    </Label>
                    <Card.Header textAlign='center'><Image size='mini' src={require(`../../images/${item}.png`)} style={{ marginLeft: '-12%', paddingRight: '5px' }} />
                    {item}
                    </Card.Header>
                    <Card.Description textAlign='center'>
                        {products[item].price}<Icon size='small' name='ils' />
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Button basic color='green' fluid onClick={this.props.handleClick}>
                            Add to card
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

export default Product;

import React, { Component } from 'react';
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react';
import { products } from '../pages/calculate';
/*
* {products[item].coupon !== '' ? (<Label as='a' color='teal' ribbon='right'>
                        {products[item].coupon}
                    </Label>) : ''}
* */
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
    /*<Card.Group>
        <Card>
            <Card.Content>
                <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                    Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image floated='right' size='mini' src='/images/avatar/large/jenny.jpg' />
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Jenny requested permission to view your contact details</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                </div>
            </Card.Content>
        </Card>
    </Card.Group>*/
}

export default Product;
